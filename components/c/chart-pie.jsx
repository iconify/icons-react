import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gdor4w2zf.css';
import '../../css/y/yo65-cb-m.css';
import '../../css/n/n16la8pke.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gdor4w2zf"/><path class="yo65-cb-m"/><path class="n16la8pke"/></g>`,
		"fallback": "glyphs:chart-pie",
	});
}

export default Component;
