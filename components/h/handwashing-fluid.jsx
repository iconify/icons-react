import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xjxmmxl-b.css';
import '../../css/c/c39h9dsia.css';
import '../../css/b/b3rvp9bqi.css';
import '../../css/q/qqa3t9b7l.css';
import '../../css/b/bgqq_8bnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="xjxmmxl-b"/><path class="c39h9dsia"/><path class="b3rvp9bqi"/><path class="qqa3t9b7l"/><path class="bgqq_8bnh"/></g>`,
		"fallback": "icon-park:handwashing-fluid",
	});
}

export default Component;
