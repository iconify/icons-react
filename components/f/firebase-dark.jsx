import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfy8vzb3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfy8vzb3u"/>`,
		"fallback": "selfhst:firebase-dark",
	});
}

export default Component;
