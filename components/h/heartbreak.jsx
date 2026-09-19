import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zdhvufbqc.css';
import '../../css/a/auso768dw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zdhvufbqc"/><path class="auso768dw"/></g>`,
		"fallback": "glyphs:heartbreak",
	});
}

export default Component;
