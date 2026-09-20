import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj6a84bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj6a84bsu"/>`,
		"fallback": "mdi:cellphone-play",
	});
}

export default Component;
