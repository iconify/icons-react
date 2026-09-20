import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pubfbmb7r.css';
import '../../css/p/p_8skf9pq.css';
import '../../css/f/f_qs10cpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pubfbmb7r"/><path class="p_8skf9pq"/><path class="f_qs10cpx"/></g>`,
		"fallback": "keyline-icons:heart-hand-sharp-duotone",
	});
}

export default Component;
