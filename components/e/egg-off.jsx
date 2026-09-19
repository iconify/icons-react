import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eftot-p6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eftot-p6r"/>`,
		"fallback": "hugeicons:egg-off",
	});
}

export default Component;
