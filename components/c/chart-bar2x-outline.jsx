import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbv56ac9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vbv56ac9e"/>`,
		"fallback": "healthicons:chart-bar2x-outline",
	});
}

export default Component;
