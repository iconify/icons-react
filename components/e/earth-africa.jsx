import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/widzzbbvc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="widzzbbvc"/>`,
		"fallback": "fa6-solid:earth-africa",
	});
}

export default Component;
