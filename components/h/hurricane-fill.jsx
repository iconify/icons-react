import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te7zi9bkg.css';
import '../../css/a/a4l89jl3b.css';
import '../../css/l/leu5edbnl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGGAnF5b5v" x1="175.8" x2="336.2" y1="117" y2="395" gradientUnits="userSpaceOnUse"><stop offset="0" class="te7zi9bkg"/><stop offset=".5" class="te7zi9bkg"/><stop offset="1" class="a4l89jl3b"/></linearGradient></defs><path stroke="url(#SVGGAnF5b5v)" class="leu5edbnl"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="1440 256 256; 0 256 256"/></path>`,
		"fallback": "meteocons:hurricane-fill",
	});
}

export default Component;
