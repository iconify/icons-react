import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzwd7eu8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzwd7eu8r"/>`,
		"fallback": "heroicons-outline:arrow-down-circle",
	});
}

export default Component;
