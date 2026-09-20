import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9x94cctu.css';
import '../../css/p/pmut7h6qt.css';
import '../../css/o/otuwqdbmm.css';
import '../../css/w/wro2609_h.css';
import '../../css/o/os6mhb5qv.css';
import '../../css/h/h-s9h9tai.css';
import '../../css/o/o-wh98b4g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="w9x94cctu"><defs><linearGradient id="SVGwMKw3bzO" x1=".025" x2="1" y1=".079" y2="0" gradientTransform="rotate(90 177.831 370.053)scale(473.895)" gradientUnits="userSpaceOnUse"><stop offset="0" class="pmut7h6qt"/><stop offset="1" class="otuwqdbmm"/></linearGradient><linearGradient id="SVG4v45ZbHi" x1="19.063" x2="19" y1="0" y2="43.25" gradientTransform="matrix(1.40188 0 0 1.34821 21.364 -32.96)" gradientUnits="userSpaceOnUse" href="#SVGwMKw3bzO"/><clipPath id="SVG13U2XcBB" clipPathUnits="userSpaceOnUse"><path class="wro2609_h"/></clipPath><filter id="SVG2JncedGT" width="1.192" height="1.148" x="-.096" y="-.074"><feGaussianBlur stdDeviation="1.002"/></filter></defs><path class="os6mhb5qv"/><path fill="url(#SVG4v45ZbHi)" transform="translate(-16 35.82)" class="h-s9h9tai"/><path clip-path="url(#SVG13U2XcBB)" filter="url(#SVG2JncedGT)" transform="matrix(1.3912 0 0 1.33794 5.567 6.716)" class="o-wh98b4g"/></g>`,
		"fallback": "thesvg-color:alacritty",
	});
}

export default Component;
