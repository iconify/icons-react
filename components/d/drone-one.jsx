import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qsfrybc2n.css';
import '../../css/b/bewmr-tqu.css';
import '../../css/b/b_zoysbpp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qsfrybc2n"/><path class="bewmr-tqu"/><path class="b_zoysbpp"/></g>`,
		"fallback": "icon-park-outline:drone-one",
	});
}

export default Component;
