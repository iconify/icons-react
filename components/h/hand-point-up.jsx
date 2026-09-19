import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssduk0_dj.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssduk0_dj"/>`,
		"fallback": "fa6-solid:hand-point-up",
	});
}

export default Component;
