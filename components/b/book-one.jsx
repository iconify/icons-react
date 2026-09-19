import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uhciadolf.css';
import '../../css/r/rie76vbte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="uhciadolf"/><path class="rie76vbte"/></g>`,
		"fallback": "icon-park-solid:book-one",
	});
}

export default Component;
