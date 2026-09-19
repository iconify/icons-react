import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbt4ulf2n.css';

const viewBox = {"width":320,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbt4ulf2n"/>`,
		"fallback": "ps:facebook-places",
	});
}

export default Component;
