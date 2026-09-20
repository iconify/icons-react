import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grtguubyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grtguubyu"/>`,
		"fallback": "subway:fullscreen",
	});
}

export default Component;
