import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmti31bmb.css';
import '../../css/g/g-1rbpbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmti31bmb"/><path class="g-1rbpbil"/>`,
		"fallback": "bx:area",
	});
}

export default Component;
