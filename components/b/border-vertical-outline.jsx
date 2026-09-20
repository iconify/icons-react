import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeo4x-vgi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeo4x-vgi"/>`,
		"fallback": "teenyicons:border-vertical-outline",
	});
}

export default Component;
