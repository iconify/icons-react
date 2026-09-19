import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/op08atben.css';
import '../../css/r/rie76vbte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="op08atben"/><path class="rie76vbte"/></g>`,
		"fallback": "icon-park-outline:book-one",
	});
}

export default Component;
