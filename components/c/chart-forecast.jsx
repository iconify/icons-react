import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/n/naqkq_sza.css';
import '../../css/t/tczj59b-w.css';
import '../../css/z/zpswksbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="if_fr7tub"/><path class="naqkq_sza"/><path class="tczj59b-w"/><path class="zpswksbzi"/></g>`,
		"fallback": "iconaut:chart-forecast",
	});
}

export default Component;
