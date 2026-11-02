import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu5xvhb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu5xvhb4d"/>`,
		"fallback": "mingcute:butterfly-fill",
	});
}

export default Component;
