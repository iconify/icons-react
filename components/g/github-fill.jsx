import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qydrce42n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qydrce42n"/>`,
		"fallback": "mingcute:github-fill",
	});
}

export default Component;
