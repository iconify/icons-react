import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mic2phbzf.css';
import '../../css/o/or-u6zr_e.css';
import '../../css/j/jd0my-7iu.css';
import '../../css/i/ivv_5yb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mic2phbzf"/><path class="or-u6zr_e"/><path class="jd0my-7iu"/><path class="ivv_5yb9r"/></g>`,
		"fallback": "hugeicons:handbag",
	});
}

export default Component;
