import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uurkl253c.css';
import '../../css/z/z3m924b_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="uurkl253c"/><path class="z3m924b_g"/></g>`,
		"fallback": "icon-park-outline:expand-left",
	});
}

export default Component;
