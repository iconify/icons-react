import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4d83uh3a.css';
import '../../css/o/olezgdc1i.css';
import '../../css/i/iuw39tbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(135 1.79 10.94)scale(-1 1)" class="k4d83uh3a"/><path class="olezgdc1i"/><path class="iuw39tbzu"/></g>`,
		"fallback": "andrsrxn:crayon",
	});
}

export default Component;
