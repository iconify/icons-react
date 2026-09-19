import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqhslzb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqhslzb9c"/>`,
		"fallback": "griddy-icons:currency-filled",
	});
}

export default Component;
