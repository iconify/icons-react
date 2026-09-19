import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9mrh9bry.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d9mrh9bry"/>`,
		"fallback": "healthicons:health-data-security2x-outline",
	});
}

export default Component;
