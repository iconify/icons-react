import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it4d2uboj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it4d2uboj"/>`,
		"fallback": "fa6-solid:circle-play",
	});
}

export default Component;
