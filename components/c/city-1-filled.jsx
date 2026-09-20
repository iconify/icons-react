import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfafurbwi.css';
import '../../css/v/vbceozjtn.css';
import '../../css/q/qu8h2tbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfafurbwi"/><path class="vbceozjtn"/><path class="qu8h2tbqf"/>`,
		"fallback": "tdesign:city-1-filled",
	});
}

export default Component;
