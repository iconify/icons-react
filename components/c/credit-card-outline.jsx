import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_y96qtkf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_y96qtkf"/>`,
		"fallback": "healthicons:credit-card-outline",
	});
}

export default Component;
