import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b5kbnzv_b.css';
import '../../css/l/lprzjlbem.css';
import '../../css/n/nzqb6cb6b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="b5kbnzv_b"/><path class="lprzjlbem"/><path class="nzqb6cb6b"/></g>`,
		"fallback": "icon-park-outline:delete-five",
	});
}

export default Component;
