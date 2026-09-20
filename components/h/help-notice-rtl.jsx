import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5w4ir7_r.css';
import '../../css/i/i_mx33b_s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5w4ir7_r"/><path class="i_mx33b_s"/>`,
		"fallback": "ooui:help-notice-rtl",
	});
}

export default Component;
