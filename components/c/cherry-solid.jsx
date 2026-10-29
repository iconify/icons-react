import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fhpb4bbvn.css';
import '../../css/q/qfd2zra5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fhpb4bbvn"/><path class="qfd2zra5h wm-a"/></g>`,
		"fallback": "withicons:cherry-solid",
	});
}

export default Component;
