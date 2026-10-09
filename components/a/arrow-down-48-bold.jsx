import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2l8ftbhe.css';
import '../../css/p/p_7xd_big.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2l8ftbhe"/><path class="p_7xd_big"/>`,
		"fallback": "energy-icons:arrow-down-48-bold",
	});
}

export default Component;
