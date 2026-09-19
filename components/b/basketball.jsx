import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zaorhnb5g.css';
import '../../css/e/es42w3bzw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zaorhnb5g"/><path class="es42w3bzw"/></g>`,
		"fallback": "glyphs:basketball",
	});
}

export default Component;
