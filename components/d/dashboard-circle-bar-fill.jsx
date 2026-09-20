import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/levk4gbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="levk4gbjw"/>`,
		"fallback": "mage:dashboard-circle-bar-fill",
	});
}

export default Component;
