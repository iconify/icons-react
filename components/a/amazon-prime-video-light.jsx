import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5s8bqb8d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5s8bqb8d"/>`,
		"fallback": "selfhst:amazon-prime-video-light",
	});
}

export default Component;
