import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu_teqejm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu_teqejm"/>`,
		"fallback": "uis:arrow-down-right",
	});
}

export default Component;
