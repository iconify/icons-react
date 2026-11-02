import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qax5_jh4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qax5_jh4p"/>`,
		"fallback": "mingcute:flight-inflight-fill",
	});
}

export default Component;
