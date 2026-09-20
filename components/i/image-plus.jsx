import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eerj2nbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eerj2nbck"/>`,
		"fallback": "pixelarticons:image-plus",
	});
}

export default Component;
