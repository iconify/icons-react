import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vffgkyb0x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vffgkyb0x"/>`,
		"fallback": "carbon:calibrate",
	});
}

export default Component;
