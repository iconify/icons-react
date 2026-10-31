import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gn1fqjcey.css';
import '../../css/a/ak005rbjl.css';
import '../../css/j/jbs8dfklc.css';
import '../../css/d/dowrwx3mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="gn1fqjcey"/><path class="ak005rbjl wm-shine"/><path class="jbs8dfklc wm-shine"/><path class="dowrwx3mp wm-shine"/></g>`,
		"fallback": "withicons-utsav:address-book",
	});
}

export default Component;
