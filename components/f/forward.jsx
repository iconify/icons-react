import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj6e5wb9j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj6e5wb9j"/>`,
		"fallback": "fa-solid:forward",
	});
}

export default Component;
