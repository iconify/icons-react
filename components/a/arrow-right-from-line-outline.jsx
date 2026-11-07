import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly14d-arz.css';
import '../../css/e/exasy4ryo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly14d-arz"/><path class="exasy4ryo"/>`,
		"fallback": "solar:arrow-right-from-line-outline",
	});
}

export default Component;
