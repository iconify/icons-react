import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq8y1_y2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq8y1_y2u"/>`,
		"fallback": "flowbite:file-word-outline",
	});
}

export default Component;
