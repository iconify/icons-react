import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4kavhetn.css';
import '../../css/u/uxdnd4bvx.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/g/g0pybxe0r.css';
import '../../css/m/mu8f_sb0x.css';
import '../../css/s/sbe0k6bqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGSv7GjdIv)" class="j4kavhetn"/><path fill="url(#SVGd1Cj6cxR)" class="uxdnd4bvx"/><defs><linearGradient id="SVGSv7GjdIv" x1="3" x2="12.128" y1="2.765" y2="35.888" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVGd1Cj6cxR" x1="22.656" x2="9.08" y1="13.4" y2="20.149" gradientUnits="userSpaceOnUse"><stop class="mu8f_sb0x"/><stop offset="1" class="sbe0k6bqt"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:approvals-app-32",
	});
}

export default Component;
