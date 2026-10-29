import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vor3rgbln.css';
import '../../css/g/g0_ah_jjj.css';
import '../../css/u/uod1qktsq.css';
import '../../css/l/leo7cev2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vor3rgbln"/><path class="g0_ah_jjj wm-shadow"/><path class="uod1qktsq"/><path class="leo7cev2r"/></g>`,
		"fallback": "withicons:avatar-man-beard-engrave",
	});
}

export default Component;
