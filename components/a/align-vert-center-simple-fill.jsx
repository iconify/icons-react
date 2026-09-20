import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avm8_9v5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="avm8_9v5k"/>`,
		"fallback": "si:align-vert-center-simple-fill",
	});
}

export default Component;
