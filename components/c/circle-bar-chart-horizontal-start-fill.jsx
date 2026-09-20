import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-6qpzjjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o-6qpzjjl"/>`,
		"fallback": "keyline-icons:circle-bar-chart-horizontal-start-fill",
	});
}

export default Component;
