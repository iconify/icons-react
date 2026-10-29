import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a-spknb2z.css';
import '../../css/f/f7_5n5bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a-spknb2z"/><path class="f7_5n5bel wm-a"/></g>`,
		"fallback": "withicons:hammer-solid",
	});
}

export default Component;
