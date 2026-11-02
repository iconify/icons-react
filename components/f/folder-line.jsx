import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8_w0s-7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8_w0s-7b"/>`,
		"fallback": "mingcute:folder-line",
	});
}

export default Component;
