import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh00p_b1q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh00p_b1q"/>`,
		"fallback": "energy-icons:hockey-48-bold",
	});
}

export default Component;
