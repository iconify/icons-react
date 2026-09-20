import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu24srbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu24srbui"/>`,
		"fallback": "mdi-light:currency-eur",
	});
}

export default Component;
