import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luc9fcg6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luc9fcg6m"/>`,
		"fallback": "mynaui:chart-graph-solid",
	});
}

export default Component;
