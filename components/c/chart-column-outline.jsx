import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/drr99_06v.css';
import '../../css/w/whufb0eev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="chart-column-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="drr99_06v"/><path class="whufb0eev"/></g></g>`,
		"fallback": "cuida:chart-column-outline",
	});
}

export default Component;
