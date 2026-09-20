import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh5l4yp3u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh5l4yp3u"/>`,
		"fallback": "jam:gamma",
	});
}

export default Component;
