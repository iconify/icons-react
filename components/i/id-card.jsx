import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/ggkec8bef.css';
import '../../css/l/l_8mf3qlf.css';
import '../../css/j/jyssoscdg.css';
import '../../css/i/ijv60abdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGlC3NZd5f" x1="9.01" x2="15.01" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGlC3NZd5f)" class="ggkec8bef"/><path class="l_8mf3qlf wm-shine"/><path class="jyssoscdg wm-shine"/><path class="ijv60abdb wm-shine"/></g>`,
		"fallback": "withicons-utsav:id-card",
	});
}

export default Component;
