import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5naakbou.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5naakbou"/>`,
		"fallback": "energy-icons:cloud-wind-48",
	});
}

export default Component;
