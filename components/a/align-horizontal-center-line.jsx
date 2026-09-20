import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v95x24b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v95x24b6t"/>`,
		"fallback": "majesticons:align-horizontal-center-line",
	});
}

export default Component;
