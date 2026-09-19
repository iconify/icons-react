import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0i5ozbxp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h0i5ozbxp"/>`,
		"fallback": "healthicons:22x-outline",
	});
}

export default Component;
