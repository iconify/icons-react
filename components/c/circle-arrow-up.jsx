import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pntcq57kh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pntcq57kh"/>`,
		"fallback": "fa6-solid:circle-arrow-up",
	});
}

export default Component;
