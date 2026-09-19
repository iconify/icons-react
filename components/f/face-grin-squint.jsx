import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5rpv5guj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5rpv5guj"/>`,
		"fallback": "fa6-solid:face-grin-squint",
	});
}

export default Component;
