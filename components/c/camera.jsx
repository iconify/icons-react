import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tl7256b_z.css';
import '../../css/a/ac83b11qc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tl7256b_z"/><path class="ac83b11qc"/></g>`,
		"fallback": "glyphs:camera",
	});
}

export default Component;
