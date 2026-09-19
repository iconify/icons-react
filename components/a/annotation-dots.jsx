import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x31er_1qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x31er_1qp"/>`,
		"fallback": "griddy-icons:annotation-dots",
	});
}

export default Component;
