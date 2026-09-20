import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zniae-8kh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zniae-8kh"/>`,
		"fallback": "selfhst:drop-light",
	});
}

export default Component;
