import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqd3i0b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tqd3i0b3h"/>`,
		"fallback": "streamline-ultimate:analytics-graph-lines-2-bold",
	});
}

export default Component;
