import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w72bjhbff.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w72bjhbff"/>`,
		"fallback": "zmdi:airline-seat-flat",
	});
}

export default Component;
