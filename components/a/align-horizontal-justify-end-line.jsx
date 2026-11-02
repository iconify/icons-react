import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr5jq2bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr5jq2bqj"/>`,
		"fallback": "mingcute:align-horizontal-justify-end-line",
	});
}

export default Component;
