import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjta-sskl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjta-sskl"/>`,
		"fallback": "pixelarticons:camera",
	});
}

export default Component;
