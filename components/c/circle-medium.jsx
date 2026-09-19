import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by8k92bns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by8k92bns"/>`,
		"fallback": "healthicons:circle-medium",
	});
}

export default Component;
