import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/q17yiac_q.css';
import '../../css/d/d5wvwy0yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwHYdBbNp" x1="9" x2="15" y1="3.01" y2="20.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGwHYdBbNp)" class="q17yiac_q"/><path class="d5wvwy0yh wm-shine"/></g>`,
		"fallback": "withicons-utsav:audio-waveform",
	});
}

export default Component;
