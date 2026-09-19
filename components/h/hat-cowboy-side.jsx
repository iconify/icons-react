import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp5gdybxr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp5gdybxr"/>`,
		"fallback": "fa-solid:hat-cowboy-side",
	});
}

export default Component;
