import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml1xv_bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml1xv_bnr"/>`,
		"fallback": "mingcute:cube-fill",
	});
}

export default Component;
