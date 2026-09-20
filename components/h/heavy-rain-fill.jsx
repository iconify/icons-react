import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofaq-pqxl.css';
import '../../css/p/ph8y6rbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofaq-pqxl"/><path class="ph8y6rbyy"/>`,
		"fallback": "mingcute:heavy-rain-fill",
	});
}

export default Component;
