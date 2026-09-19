import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it6b2upls.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="it6b2upls"/>`,
		"fallback": "healthicons:baby-female-0203m-negative",
	});
}

export default Component;
