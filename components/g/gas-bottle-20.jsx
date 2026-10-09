import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v99dkbc9l.css';
import '../../css/l/ltc2--b_x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v99dkbc9l"/><path class="ltc2--b_x"/>`,
		"fallback": "energy-icons:gas-bottle-20",
	});
}

export default Component;
