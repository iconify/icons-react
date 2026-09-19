import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4n-w4qjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4n-w4qjv"/>`,
		"fallback": "fa6-solid:baseball",
	});
}

export default Component;
