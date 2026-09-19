import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnztqcbbd.css';

const viewBox = {"width":408,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnztqcbbd"/>`,
		"fallback": "zmdi:copy",
	});
}

export default Component;
