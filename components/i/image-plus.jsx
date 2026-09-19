import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n94ewo9oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n94ewo9oz"/>`,
		"fallback": "griddy-icons:image-plus",
	});
}

export default Component;
