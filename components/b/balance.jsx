import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vss48e-1x.css';

const viewBox = {"width":408,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vss48e-1x"/>`,
		"fallback": "zmdi:balance",
	});
}

export default Component;
