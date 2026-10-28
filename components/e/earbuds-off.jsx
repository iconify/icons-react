import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy8w9q0xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy8w9q0xj"/>`,
		"fallback": "lucide:earbuds-off",
	});
}

export default Component;
