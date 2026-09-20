import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ner24ccnr.css';
import '../../css/h/hzzbx-bfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ner24ccnr"/><path class="hzzbx-bfb"/></g>`,
		"fallback": "keyline-icons:circle-more-vertical-duotone",
	});
}

export default Component;
