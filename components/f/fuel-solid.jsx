import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e-ssb4b4m.css';
import '../../css/f/f88z7qbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="e-ssb4b4m"/><path class="f88z7qbfk wm-a"/></g>`,
		"fallback": "withicons:fuel-solid",
	});
}

export default Component;
