import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m802_1bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m802_1bgx"/>`,
		"fallback": "mage:dashboard-fill",
	});
}

export default Component;
