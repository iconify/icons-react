import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj3yo8bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj3yo8bxf"/>`,
		"fallback": "coolicons:arrow-down-up-bulk-round",
	});
}

export default Component;
