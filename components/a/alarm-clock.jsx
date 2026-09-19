import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jqjkvc5ue.css';
import '../../css/q/ql9sd2bvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jqjkvc5ue"/><path class="ql9sd2bvf"/></g>`,
		"fallback": "icon-park-outline:alarm-clock",
	});
}

export default Component;
