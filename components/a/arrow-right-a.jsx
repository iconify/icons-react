import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shie5ja2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shie5ja2x"/>`,
		"fallback": "ion:arrow-right-a",
	});
}

export default Component;
