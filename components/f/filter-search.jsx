import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_9xmj8ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_9xmj8ew"/>`,
		"fallback": "tabler:filter-search",
	});
}

export default Component;
