import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/noua3z6jc.css';
import '../../css/b/b_x93ydzf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="noua3z6jc"/><path class="b_x93ydzf"/></g>`,
		"fallback": "icon-park-solid:desk-lamp-one",
	});
}

export default Component;
