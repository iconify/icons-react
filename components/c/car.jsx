import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysak76b7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysak76b7u"/>`,
		"fallback": "ion:car",
	});
}

export default Component;
