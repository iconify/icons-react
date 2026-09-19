import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyaq9f7-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qyaq9f7-d"/>`,
		"fallback": "healthicons:globe2x-outline",
	});
}

export default Component;
