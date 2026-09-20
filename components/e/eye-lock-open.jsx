import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i83io6b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i83io6b6b"/>`,
		"fallback": "mdi:eye-lock-open",
	});
}

export default Component;
