import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6lc_ebxi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6lc_ebxi"/>`,
		"fallback": "whh:emojismile",
	});
}

export default Component;
