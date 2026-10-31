import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/kt3qm00dn.css';
import '../../css/s/sjaug-xik.css';
import '../../css/y/y3wowxbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfkHwweTu" x1="9" x2="15" y1="2.26" y2="21.34" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGfkHwweTu)" class="kt3qm00dn"/><path class="sjaug-xik wm-a"/><path class="wm-shine y3wowxbfb"/></g>`,
		"fallback": "withicons-utsav:boxes",
	});
}

export default Component;
