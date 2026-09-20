import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/h/hz77_cbyt.css';
import '../../css/q/qnzv3xb_d.css';
import '../../css/c/cwlw_lbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="hz77_cbyt"/><path class="qnzv3xb_d"/><path class="cwlw_lbhy"/></g>`,
		"fallback": "streamline-ultimate-color:analytics-net",
	});
}

export default Component;
