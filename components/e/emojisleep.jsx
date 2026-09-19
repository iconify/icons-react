import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzn7p-lkr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzn7p-lkr"/>`,
		"fallback": "whh:emojisleep",
	});
}

export default Component;
