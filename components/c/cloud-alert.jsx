import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/v/ve9h4jxkp.css';
import '../../css/r/ritdcvb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGEbIFRDIm" x1="1.65" x2="13.08" y1="4.88" y2="20" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient></defs><path class="ve9h4jxkp"/><path fill="url(#SVGEbIFRDIm)" class="ritdcvb6c wm-shine"/></g>`,
		"fallback": "withicons-christmas:cloud-alert",
	});
}

export default Component;
