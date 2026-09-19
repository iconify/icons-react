import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wwo8iebgu.css';
import '../../css/d/d58qn-eje.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wwo8iebgu"/><path class="d58qn-eje"/></g>`,
		"fallback": "glyphs:file",
	});
}

export default Component;
