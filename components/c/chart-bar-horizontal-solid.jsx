import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/el5vkabjd.css';
import '../../css/o/ofbsit01q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="el5vkabjd"/><path class="ofbsit01q wm-a"/></g>`,
		"fallback": "withicons:chart-bar-horizontal-solid",
	});
}

export default Component;
