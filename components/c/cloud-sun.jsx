import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywl8jmbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywl8jmbmh"/>`,
		"fallback": "pixelarticons:cloud-sun",
	});
}

export default Component;
