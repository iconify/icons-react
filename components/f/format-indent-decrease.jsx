import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksi8u2bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksi8u2bfj"/>`,
		"fallback": "mdi:format-indent-decrease",
	});
}

export default Component;
