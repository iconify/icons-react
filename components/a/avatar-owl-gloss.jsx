import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tace0pqtf.css';
import '../../css/f/fpizaeblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tace0pqtf wm-k"/><path class="fpizaeblt wm-a"/></g>`,
		"fallback": "withicons:avatar-owl-gloss",
	});
}

export default Component;
