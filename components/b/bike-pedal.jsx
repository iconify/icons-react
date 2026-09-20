import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h96bfwb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h96bfwb_t"/>`,
		"fallback": "mdi:bike-pedal",
	});
}

export default Component;
