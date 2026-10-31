import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/z4mg5y06c.css';
import '../../css/b/bfnapgbah.css';
import '../../css/m/ma_ms-x9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJVC6jcAL" x1="11.37" x2="17.37" y1="1.27" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGJVC6jcAL)" class="z4mg5y06c"/><path class="bfnapgbah wm-a"/><path class="ma_ms-x9q wm-shine"/></g>`,
		"fallback": "withicons-utsav:firecracker",
	});
}

export default Component;
