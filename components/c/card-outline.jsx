import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha-pt9vny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha-pt9vny"/>`,
		"fallback": "mdi:card-outline",
	});
}

export default Component;
