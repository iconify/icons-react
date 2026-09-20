import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljtdt-iiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljtdt-iiv"/>`,
		"fallback": "mdi:arrow-left-drop-circle-outline",
	});
}

export default Component;
