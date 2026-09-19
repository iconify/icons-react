import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve7vcj02a.css';
import '../../css/o/okcnfabkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve7vcj02a"/><path class="okcnfabkz"/>`,
		"fallback": "bx:bx-line-chart-down",
	});
}

export default Component;
