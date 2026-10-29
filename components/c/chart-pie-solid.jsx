import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lgqw9qb9l.css';
import '../../css/l/lc28th4ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lgqw9qb9l"/><path class="lc28th4ji wm-a"/></g>`,
		"fallback": "withicons:chart-pie-solid",
	});
}

export default Component;
