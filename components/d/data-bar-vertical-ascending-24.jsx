import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh1-67bzv.css';
import '../../css/z/zhppk7bda.css';
import '../../css/x/xeoml1bew.css';
import '../../css/l/l5cbemxif.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGEhieSdYQ)" class="kh1-67bzv"/><path fill="url(#SVGCiHDFcVl)" class="zhppk7bda"/><path fill="url(#SVGqYuFxdlv)" class="xeoml1bew"/><defs><linearGradient id="SVGEhieSdYQ" x1="19.908" x2="31.994" y1="-2.529" y2="3.112" gradientUnits="userSpaceOnUse"><stop class="l5cbemxif"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVGCiHDFcVl" x1="9.934" x2="20.859" y1="3.58" y2="10.018" gradientUnits="userSpaceOnUse"><stop class="l5cbemxif"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVGqYuFxdlv" x1="2.719" x2="11.477" y1="5.375" y2="12.6" gradientUnits="userSpaceOnUse"><stop class="l5cbemxif"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:data-bar-vertical-ascending-24",
	});
}

export default Component;
