import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqtso2iev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqtso2iev"/>`,
		"fallback": "mingcute:ease-out-control-point-line",
	});
}

export default Component;
