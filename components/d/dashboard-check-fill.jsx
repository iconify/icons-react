import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa0sf7bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa0sf7bje"/>`,
		"fallback": "mage:dashboard-check-fill",
	});
}

export default Component;
