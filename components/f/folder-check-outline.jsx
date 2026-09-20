import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz8hf6bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cz8hf6bxz"/>`,
		"fallback": "solar:folder-check-outline",
	});
}

export default Component;
