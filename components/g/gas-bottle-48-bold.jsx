import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb2mawalq.css';
import '../../css/v/vzv6lusvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb2mawalq"/><path class="vzv6lusvh"/>`,
		"fallback": "energy-icons:gas-bottle-48-bold",
	});
}

export default Component;
