import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbmnp_bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbmnp_bqx"/>`,
		"fallback": "mingcute:align-left-fill",
	});
}

export default Component;
