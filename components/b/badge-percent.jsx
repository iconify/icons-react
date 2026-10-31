import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/l/lceff4vnv.css';
import '../../css/m/mb-0jf27f.css';
import '../../css/m/melx6mb7q.css';
import '../../css/z/zecy4jb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyS53PGOI" x1="9" x2="15" y1="1.01" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGyS53PGOI)" class="lceff4vnv"/><path class="mb-0jf27f wm-shine"/><path class="melx6mb7q wm-shine"/><path class="wm-shine zecy4jb8v"/></g>`,
		"fallback": "withicons-utsav:badge-percent",
	});
}

export default Component;
