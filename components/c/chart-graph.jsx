import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x-0mm_bju.css';
import '../../css/a/ao9yjmaru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x-0mm_bju"/><path class="ao9yjmaru"/></g>`,
		"fallback": "mynaui:chart-graph",
	});
}

export default Component;
