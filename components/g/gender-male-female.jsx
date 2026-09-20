import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfqqq2-qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfqqq2-qh"/>`,
		"fallback": "mdi:gender-male-female",
	});
}

export default Component;
