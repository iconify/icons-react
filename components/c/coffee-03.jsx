import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rthutnbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rthutnbfo"/>`,
		"fallback": "hugeicons:coffee-03",
	});
}

export default Component;
