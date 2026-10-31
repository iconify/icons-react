import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/kxxdorb1r.css';
import '../../css/l/l_sol7b7r.css';
import '../../css/m/mppc-wban.css';
import '../../css/f/fa1atjhts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVGJiScbW" x1="9" x2="15" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGVGJiScbW)" class="kxxdorb1r"/><path class="l_sol7b7r wm-shine"/><path class="mppc-wban wm-shine"/><path class="fa1atjhts wm-shine"/></g>`,
		"fallback": "withicons-utsav:archive",
	});
}

export default Component;
