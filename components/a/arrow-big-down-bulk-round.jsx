import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv93zobeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv93zobeb"/>`,
		"fallback": "coolicons:arrow-big-down-bulk-round",
	});
}

export default Component;
