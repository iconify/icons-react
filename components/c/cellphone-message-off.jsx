import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwa1_bb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwa1_bb1a"/>`,
		"fallback": "mdi:cellphone-message-off",
	});
}

export default Component;
