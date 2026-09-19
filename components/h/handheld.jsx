import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q7nwfvbkq.css';
import '../../css/a/a5nsjwbyz.css';
import '../../css/g/geuvczi2n.css';
import '../../css/t/t9galjb2r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="q7nwfvbkq"/><path class="a5nsjwbyz"/><path class="geuvczi2n"/><path class="t9galjb2r"/></g>`,
		"fallback": "icon-park-outline:handheld",
	});
}

export default Component;
