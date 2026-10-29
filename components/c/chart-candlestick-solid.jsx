import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wf15vrtfa.css';
import '../../css/q/q7cvdab9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wf15vrtfa"/><path class="q7cvdab9e wm-a"/></g>`,
		"fallback": "withicons:chart-candlestick-solid",
	});
}

export default Component;
