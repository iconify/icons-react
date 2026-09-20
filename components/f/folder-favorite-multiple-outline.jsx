import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_w-igyiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_w-igyiu"/>`,
		"fallback": "mdi:folder-favorite-multiple-outline",
	});
}

export default Component;
