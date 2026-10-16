import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrw5zccqv.css';
import '../../css/g/gu_hyzqsm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrw5zccqv"/><path class="gu_hyzqsm"/>`,
		"fallback": "energy-icons:folder-star-48-bold",
	});
}

export default Component;
