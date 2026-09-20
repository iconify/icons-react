import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7v4k9b7n.css';
import '../../css/k/k1yi-x8pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7v4k9b7n"/><path class="k1yi-x8pw"/>`,
		"fallback": "streamline-freehand:analytics-graph-stock",
	});
}

export default Component;
