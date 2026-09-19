import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/l/lyard7xsu.css';
import '../../css/b/b5bvdlbrd.css';
import '../../css/x/xmplaw6sc.css';
import '../../css/h/hdq_bpbru.css';
import '../../css/i/ik412wtjo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="lyard7xsu"/><path class="b5bvdlbrd"/><path class="xmplaw6sc"/><path class="hdq_bpbru"/><path class="ik412wtjo"/></g>`,
		"fallback": "icon-park:insert-table",
	});
}

export default Component;
