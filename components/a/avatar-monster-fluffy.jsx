import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/dh3czvb7u.css';
import '../../css/d/dxsrntnhk.css';
import '../../css/q/qv0etab0m.css';
import '../../css/t/tv_xatxht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG4JkZ6cKz" x1="9" x2="15" y1="1.75" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG4JkZ6cKz)" class="dh3czvb7u"/><path class="dxsrntnhk wm-shine"/><path class="qv0etab0m wm-shine"/><path class="tv_xatxht wm-shine"/></g>`,
		"fallback": "withicons-utsav:avatar-monster-fluffy",
	});
}

export default Component;
