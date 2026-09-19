import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wx_3q-bka.css';
import '../../css/k/kft13bcfg.css';
import '../../css/y/y8s0ycc7h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wx_3q-bka"/><path class="kft13bcfg"/><path class="y8s0ycc7h"/></g>`,
		"fallback": "glyphs:house-damage-duo",
	});
}

export default Component;
