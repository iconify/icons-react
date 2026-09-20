import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awzd49bdq.css';
import '../../css/q/qmjsi1lav.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awzd49bdq"/><path class="qmjsi1lav"/>`,
		"fallback": "lineicons:crown",
	});
}

export default Component;
