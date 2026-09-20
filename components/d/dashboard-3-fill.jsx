import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uei7otwae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uei7otwae"/>`,
		"fallback": "mage:dashboard-3-fill",
	});
}

export default Component;
