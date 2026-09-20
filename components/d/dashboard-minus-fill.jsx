import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb4mr0b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb4mr0b_b"/>`,
		"fallback": "mage:dashboard-minus-fill",
	});
}

export default Component;
