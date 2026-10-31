import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/wo0iqobjr.css';
import '../../css/i/i65_ug37z.css';
import '../../css/i/io__p6b4k.css';
import '../../css/u/u9q3_zs6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwAiTXboc" x1="9.5" x2="15.5" y1="1.57" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGwAiTXboc)" class="wo0iqobjr"/><path class="i65_ug37z wm-shine"/><path class="io__p6b4k wm-shine"/><path class="u9q3_zs6d wm-shine"/></g>`,
		"fallback": "withicons-utsav:flag-checkered",
	});
}

export default Component;
