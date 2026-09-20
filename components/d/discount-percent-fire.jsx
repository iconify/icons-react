import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/k4frm1bxg.css';
import '../../css/i/irvoe-blc.css';
import '../../css/b/bpl5rbbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="k4frm1bxg"/><path class="irvoe-blc"/><path class="bpl5rbbah"/></g>`,
		"fallback": "streamline-sharp-color:discount-percent-fire",
	});
}

export default Component;
