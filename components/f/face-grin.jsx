import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hti7vubwb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hti7vubwb"/>`,
		"fallback": "fa6-solid:face-grin",
	});
}

export default Component;
