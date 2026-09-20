import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqv1ecbnn.css';
import '../../css/d/df0l6dbti.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqv1ecbnn"/><path class="df0l6dbti"/>`,
		"fallback": "lineicons:game",
	});
}

export default Component;
