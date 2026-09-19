import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xw7my_t.css';

const viewBox = {"width":432,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5xw7my_t"/>`,
		"fallback": "zmdi:airline-seat-recline-extra",
	});
}

export default Component;
