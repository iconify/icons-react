import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g84-wwike.css';
import '../../css/e/eqsvlb-9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g84-wwike"/><path class="eqsvlb-9z wm-a"/></g>`,
		"fallback": "withicons:butterfly-solid",
	});
}

export default Component;
