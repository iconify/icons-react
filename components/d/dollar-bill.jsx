import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jrhi8gbih.css';
import '../../css/u/u0oznelvq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jrhi8gbih"/><path class="u0oznelvq"/></g>`,
		"fallback": "glyphs:dollar-bill",
	});
}

export default Component;
