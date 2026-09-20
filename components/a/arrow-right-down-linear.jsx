import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cem9-c3jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cem9-c3jg"/>`,
		"fallback": "solar:arrow-right-down-linear",
	});
}

export default Component;
