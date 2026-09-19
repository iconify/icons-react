import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b5kbnzv_b.css';
import '../../css/t/tvs-9kben.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="b5kbnzv_b"/><path class="tvs-9kben"/></g>`,
		"fallback": "icon-park-solid:delete-four",
	});
}

export default Component;
