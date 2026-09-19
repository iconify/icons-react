import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgv6f4bkh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgv6f4bkh"/>`,
		"fallback": "carbon:cube",
	});
}

export default Component;
