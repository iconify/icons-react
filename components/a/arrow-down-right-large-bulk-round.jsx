import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it0rrpb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it0rrpb1y"/>`,
		"fallback": "coolicons:arrow-down-right-large-bulk-round",
	});
}

export default Component;
