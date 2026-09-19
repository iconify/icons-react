import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zv90fvb2w.css';
import '../../css/l/lar-c1ezo.css';
import '../../css/b/b0244z36l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zv90fvb2w"/><path class="lar-c1ezo"/><path class="b0244z36l"/></g>`,
		"fallback": "icon-park-outline:devices",
	});
}

export default Component;
