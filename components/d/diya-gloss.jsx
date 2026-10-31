import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hnl-i1bzz.css';
import '../../css/s/s4si9cb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hnl-i1bzz wm-k"/><path class="s4si9cb7t wm-a"/></g>`,
		"fallback": "withicons:diya-gloss",
	});
}

export default Component;
