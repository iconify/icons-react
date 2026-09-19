import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaz_ppzod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaz_ppzod"/>`,
		"fallback": "hugeicons:ice-cream-04",
	});
}

export default Component;
