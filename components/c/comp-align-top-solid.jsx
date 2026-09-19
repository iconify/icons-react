import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v9ph1l8bd.css';
import '../../css/o/o8wgv9bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v9ph1l8bd"/><path class="o8wgv9bix"/></g>`,
		"fallback": "iconoir:comp-align-top-solid",
	});
}

export default Component;
