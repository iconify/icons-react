import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twkqxoofe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twkqxoofe"/>`,
		"fallback": "hugeicons:dashboard-square-add",
	});
}

export default Component;
