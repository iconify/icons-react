import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oejyfcccr.css';
import '../../css/z/zv_mybbhp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oejyfcccr"/><path class="zv_mybbhp"/>`,
		"fallback": "energy-icons:chart-line-20-bold",
	});
}

export default Component;
