import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ippu6y8jn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ippu6y8jn"/>`,
		"fallback": "selfhst:daylog-light",
	});
}

export default Component;
