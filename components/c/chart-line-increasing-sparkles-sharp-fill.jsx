import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/od6x74bax.css';
import '../../css/n/ndppb6bgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="od6x74bax"/><path class="ndppb6bgn"/></g>`,
		"fallback": "keyline-icons:chart-line-increasing-sparkles-sharp-fill",
	});
}

export default Component;
