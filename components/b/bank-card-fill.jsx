import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri0479btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri0479btz"/>`,
		"fallback": "mingcute:bank-card-fill",
	});
}

export default Component;
