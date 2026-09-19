import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke1y0kp2h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ke1y0kp2h"/>`,
		"fallback": "healthicons:chaplaincy",
	});
}

export default Component;
