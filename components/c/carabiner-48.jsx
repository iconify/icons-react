import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6_t7vb5q.css';
import '../../css/k/ky_d4sbut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6_t7vb5q"/><path class="ky_d4sbut"/>`,
		"fallback": "energy-icons:carabiner-48",
	});
}

export default Component;
