import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg4s144ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kg4s144ij"/>`,
		"fallback": "healthicons:enzyme-24px",
	});
}

export default Component;
