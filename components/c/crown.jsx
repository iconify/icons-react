import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/z1fu_mb4n.css';
import '../../css/l/lk69x9__v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="z1fu_mb4n"/><path class="lk69x9__v"/></g>`,
		"fallback": "icon-park-outline:crown",
	});
}

export default Component;
