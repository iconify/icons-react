import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/ivjdqkb4i.css';
import '../../css/r/rpgbrbc4i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ivjdqkb4i"/><path class="rpgbrbc4i"/></g>`,
		"fallback": "icon-park-outline:ghost",
	});
}

export default Component;
