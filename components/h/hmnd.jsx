import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohmcow45c.css';
import '../../css/e/emp3rxbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohmcow45c"/><path class="emp3rxbod"/>`,
		"fallback": "token:hmnd",
	});
}

export default Component;
