import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkkp_d1vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkkp_d1vr"/>`,
		"fallback": "mingcute:copy-2-fill",
	});
}

export default Component;
