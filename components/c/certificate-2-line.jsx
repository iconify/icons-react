import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q679esbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q679esbud"/>`,
		"fallback": "mingcute:certificate-2-line",
	});
}

export default Component;
