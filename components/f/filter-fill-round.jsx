import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcc8lpl6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcc8lpl6m"/>`,
		"fallback": "coolicons:filter-fill-round",
	});
}

export default Component;
