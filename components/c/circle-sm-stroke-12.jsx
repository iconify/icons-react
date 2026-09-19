import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjwek1blh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hjwek1blh"/>`,
		"fallback": "garden:circle-sm-stroke-12",
	});
}

export default Component;
