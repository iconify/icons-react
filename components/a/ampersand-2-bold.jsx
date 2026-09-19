import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l8wgj3qca.css';
import '../../css/h/heyzf2bkr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l8wgj3qca"/><path class="heyzf2bkr"/></g>`,
		"fallback": "glyphs:ampersand-2-bold",
	});
}

export default Component;
