import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi8211lux.css';

const viewBox = {"width":2048,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi8211lux"/>`,
		"fallback": "fa:bed",
	});
}

export default Component;
