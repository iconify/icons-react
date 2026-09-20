import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muem-vb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muem-vb7t"/>`,
		"fallback": "mdi:camera-front-variant",
	});
}

export default Component;
