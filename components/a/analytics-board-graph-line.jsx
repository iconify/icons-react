import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tha6a3bsa.css';
import '../../css/r/rhaz0i9bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tha6a3bsa"/><path class="rhaz0i9bb"/></g>`,
		"fallback": "streamline-ultimate:analytics-board-graph-line",
	});
}

export default Component;
