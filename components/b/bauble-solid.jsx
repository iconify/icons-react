import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ypdhyccxs.css';
import '../../css/v/vqpfyxbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ypdhyccxs"/><path class="vqpfyxbpk wm-a"/></g>`,
		"fallback": "withicons:bauble-solid",
	});
}

export default Component;
