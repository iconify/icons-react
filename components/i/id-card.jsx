import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roek0__-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roek0__-b"/>`,
		"fallback": "subway:id-card",
	});
}

export default Component;
