import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/wib3bn-kj.css';
import '../../css/l/li4ud5qxz.css';
import '../../css/j/jrq_zsyed.css';
import '../../css/w/wxnwsc35y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMvXsVdbd" x1="9.13" x2="15.13" y1="2.92" y2="22.01" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="wib3bn-kj wm-s"/><path fill="url(#SVGMvXsVdbd)" class="li4ud5qxz"/><path class="jrq_zsyed wm-s"/><path class="wm-shine wxnwsc35y"/></g>`,
		"fallback": "withicons-utsav:brain-cog",
	});
}

export default Component;
