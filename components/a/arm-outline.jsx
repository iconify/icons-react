import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtqv6pbei.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtqv6pbei"/>`,
		"fallback": "healthicons:arm-outline",
	});
}

export default Component;
