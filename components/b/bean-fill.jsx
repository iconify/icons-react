import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qse_z8bnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qse_z8bnp"/>`,
		"fallback": "mingcute:bean-fill",
	});
}

export default Component;
