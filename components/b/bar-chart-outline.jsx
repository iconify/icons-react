import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv-tlrbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv-tlrbgb"/>`,
		"fallback": "eva:bar-chart-outline",
	});
}

export default Component;
