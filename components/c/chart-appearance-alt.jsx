import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbwv4_vtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbwv4_vtb"/>`,
		"fallback": "griddy-icons:chart-appearance-alt",
	});
}

export default Component;
