import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f9hoyynpq.css';
import '../../css/n/nkg7s7ybl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f9hoyynpq"/><path class="nkg7s7ybl"/></g>`,
		"fallback": "keyline-icons:calendar-duotone",
	});
}

export default Component;
