import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq7ursrio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq7ursrio"/>`,
		"fallback": "mage:dashboard-3",
	});
}

export default Component;
