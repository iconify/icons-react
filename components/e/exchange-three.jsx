import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/w0l95_bea.css';
import '../../css/t/tdrgxhknx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="w0l95_bea"/><path class="tdrgxhknx"/></g>`,
		"fallback": "icon-park-outline:exchange-three",
	});
}

export default Component;
