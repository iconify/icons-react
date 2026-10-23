import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/ysni6wxva.css';
import '../../css/k/ks12fepvi.css';
import '../../css/d/d-agg5bah.css';
import '../../css/y/yviokgvuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ysni6wxva"/><path class="ks12fepvi"/><path class="d-agg5bah"/><path class="yviokgvuz"/></g>`,
		"fallback": "matita:heart-pulse",
	});
}

export default Component;
