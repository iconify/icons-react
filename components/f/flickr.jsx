import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msf02b-ag.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msf02b-ag"/>`,
		"fallback": "fa6-brands:flickr",
	});
}

export default Component;
