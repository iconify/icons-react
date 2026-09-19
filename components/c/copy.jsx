import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mj9b5m6rh.css';
import '../../css/p/pjmjv_b-e.css';
import '../../css/v/vrai7hbra.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mj9b5m6rh"/><path class="pjmjv_b-e"/><path class="vrai7hbra"/></g>`,
		"fallback": "glyphs:copy",
	});
}

export default Component;
