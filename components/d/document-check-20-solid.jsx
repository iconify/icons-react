import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6isgs9fp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m6isgs9fp"/>`,
		"fallback": "heroicons:document-check-20-solid",
	});
}

export default Component;
