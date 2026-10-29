import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dj8ancsqh.css';
import '../../css/a/ajr3wu4eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dj8ancsqh"/><path class="ajr3wu4eu wm-a"/></g>`,
		"fallback": "withicons:chart-column-stacked-solid",
	});
}

export default Component;
