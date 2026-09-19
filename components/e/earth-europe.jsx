import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heavwi7eu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heavwi7eu"/>`,
		"fallback": "fa6-solid:earth-europe",
	});
}

export default Component;
