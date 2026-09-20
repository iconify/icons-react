import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzf3c84or.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzf3c84or"/>`,
		"fallback": "selfhst:adminer-light",
	});
}

export default Component;
