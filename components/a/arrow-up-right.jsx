import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/p92gf3bfz.css';
import '../../css/m/ml9q1n6nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGEv4vL6BB" x1="9" x2="15" y1="5.5" y2="18.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGEv4vL6BB)" class="p92gf3bfz"/><path class="ml9q1n6nn wm-shine"/></g>`,
		"fallback": "withicons-utsav:arrow-up-right",
	});
}

export default Component;
