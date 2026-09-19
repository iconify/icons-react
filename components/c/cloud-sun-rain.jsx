import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkiso9bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkiso9bqt"/>`,
		"fallback": "hugeicons:cloud-sun-rain",
	});
}

export default Component;
