import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oafi4yb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oafi4yb8y"/>`,
		"fallback": "boxicons:head-filled",
	});
}

export default Component;
