import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2shq74qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2shq74qt"/>`,
		"fallback": "hugeicons:chart-column-decreasing",
	});
}

export default Component;
