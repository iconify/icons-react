import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/dewet5b8e.css';
import '../../css/y/y7yk3pbxg.css';
import '../../css/w/whxu79bxt.css';
import '../../css/n/n9kpt4fbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyirdsZcm" x1="9" x2="15" y1="1.02" y2="22.74" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGyirdsZcm)" class="dewet5b8e"/><path class="wm-shine y7yk3pbxg"/><path class="whxu79bxt wm-shine"/><path class="n9kpt4fbx wm-shine"/></g>`,
		"fallback": "withicons-utsav:gingerbread-man",
	});
}

export default Component;
