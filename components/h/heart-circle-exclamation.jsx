import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc4wv6kjz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc4wv6kjz"/>`,
		"fallback": "fa7-solid:heart-circle-exclamation",
	});
}

export default Component;
