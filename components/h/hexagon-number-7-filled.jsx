import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkon9widq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkon9widq"/>`,
		"fallback": "tabler:hexagon-number-7-filled",
	});
}

export default Component;
