import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9qymsk4b.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9qymsk4b"/>`,
		"fallback": "fa-solid:glass-cheers",
	});
}

export default Component;
