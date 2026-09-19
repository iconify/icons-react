import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ituhl-r_b.css';
import '../../css/o/ovbf84bqb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ituhl-r_b"/><path class="ovbf84bqb"/></g>`,
		"fallback": "glyphs:flag-bold",
	});
}

export default Component;
