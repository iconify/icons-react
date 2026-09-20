import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxc3l3bcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxc3l3bcz"/>`,
		"fallback": "selfhst:bind-9-dark",
	});
}

export default Component;
