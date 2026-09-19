import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opm90jp3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opm90jp3y"/>`,
		"fallback": "boxicons:helmet",
	});
}

export default Component;
