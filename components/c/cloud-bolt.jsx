import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc510tt4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc510tt4m"/>`,
		"fallback": "fa6-solid:cloud-bolt",
	});
}

export default Component;
