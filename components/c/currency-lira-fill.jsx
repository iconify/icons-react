import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obrrhwblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obrrhwblb"/>`,
		"fallback": "mingcute:currency-lira-fill",
	});
}

export default Component;
