import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz_d2sdhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz_d2sdhr"/>`,
		"fallback": "hugeicons:arrow-big-left-dash",
	});
}

export default Component;
