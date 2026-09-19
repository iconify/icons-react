import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jbkf9ob4f.css';
import '../../css/t/tgx8_uz9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jbkf9ob4f"/><path class="tgx8_uz9f"/></g>`,
		"fallback": "icon-park-outline:ad-product",
	});
}

export default Component;
