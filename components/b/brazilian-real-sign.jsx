import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oueemn-9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oueemn-9u"/>`,
		"fallback": "fa6-solid:brazilian-real-sign",
	});
}

export default Component;
