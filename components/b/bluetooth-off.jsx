import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi323x62o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi323x62o"/>`,
		"fallback": "tabler:bluetooth-off",
	});
}

export default Component;
