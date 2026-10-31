import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bxrgy0b5k.css';
import '../../css/l/lbhsnrblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bxrgy0b5k wm-k"/><path class="lbhsnrblq wm-s"/></g>`,
		"fallback": "withicons:cloud-download-gloss",
	});
}

export default Component;
