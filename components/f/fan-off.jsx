import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-i065b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-i065b8p"/>`,
		"fallback": "mdi:fan-off",
	});
}

export default Component;
