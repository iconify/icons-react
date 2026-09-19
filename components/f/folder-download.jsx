import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g4xor0bvg.css';
import '../../css/d/danokxbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g4xor0bvg"/><path class="danokxbri"/></g>`,
		"fallback": "hugeicons:folder-download",
	});
}

export default Component;
