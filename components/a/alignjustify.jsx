import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfg8bo1tv.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfg8bo1tv"/>`,
		"fallback": "whh:alignjustify",
	});
}

export default Component;
