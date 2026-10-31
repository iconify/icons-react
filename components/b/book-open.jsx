import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/a/a-wv-4-ja.css';
import '../../css/n/np3rzsngt.css';
import '../../css/v/v9tb7703s.css';
import '../../css/z/zgrgq2b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGEDmQ8bKF" x1="9.01" x2="15.01" y1="3.52" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGEDmQ8bKF)" class="a-wv-4-ja"/><path class="np3rzsngt wm-shine"/><path class="v9tb7703s wm-shine"/><path class="wm-shine zgrgq2b2o"/></g>`,
		"fallback": "withicons-utsav:book-open",
	});
}

export default Component;
