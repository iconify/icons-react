import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl4crjbev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gl4crjbev"/>`,
		"fallback": "healthicons:i-utensils-outline",
	});
}

export default Component;
