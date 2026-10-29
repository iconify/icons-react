import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a6y1n2biv.css';
import '../../css/e/emcvt5buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a6y1n2biv"/><path class="emcvt5buf wm-a"/></g>`,
		"fallback": "withicons:clapperboard-solid",
	});
}

export default Component;
