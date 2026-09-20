import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdb6lnb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdb6lnb5u"/>`,
		"fallback": "mdi:eye-lock-open-outline",
	});
}

export default Component;
