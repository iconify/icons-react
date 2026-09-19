import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x89aj3bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x89aj3bte"/>`,
		"fallback": "bitcoin-icons:camera-filled",
	});
}

export default Component;
