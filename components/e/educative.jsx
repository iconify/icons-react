import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx2s7_b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx2s7_b9r"/>`,
		"fallback": "simple-icons:educative",
	});
}

export default Component;
