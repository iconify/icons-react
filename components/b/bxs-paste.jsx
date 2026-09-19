import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_3eqdman.css';
import '../../css/e/eh1h-1bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_3eqdman"/><path class="eh1h-1bqw"/>`,
		"fallback": "bx:bxs-paste",
	});
}

export default Component;
