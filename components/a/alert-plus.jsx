import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_3zf4ikc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_3zf4ikc"/>`,
		"fallback": "mdi:alert-plus",
	});
}

export default Component;
