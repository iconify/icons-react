import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o97q_2bca.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o97q_2bca"/>`,
		"fallback": "zondicons:chart-pie",
	});
}

export default Component;
