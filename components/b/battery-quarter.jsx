import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzmwbobwf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzmwbobwf"/>`,
		"fallback": "fa6-solid:battery-quarter",
	});
}

export default Component;
