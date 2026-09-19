import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqjf0ebnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqjf0ebnh"/>`,
		"fallback": "healthicons:cannabis",
	});
}

export default Component;
