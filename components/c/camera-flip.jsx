import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqk-0y0et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqk-0y0et"/>`,
		"fallback": "mdi:camera-flip",
	});
}

export default Component;
