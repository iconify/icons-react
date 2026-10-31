import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8buvebpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8buvebpb"/>`,
		"fallback": "coolicons:arrow-down-left-small-duotone-round",
	});
}

export default Component;
