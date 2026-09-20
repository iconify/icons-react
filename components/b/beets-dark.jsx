import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc4l1bimx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc4l1bimx"/>`,
		"fallback": "selfhst:beets-dark",
	});
}

export default Component;
