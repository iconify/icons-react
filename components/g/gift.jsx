import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/elb8eobta.css';
import '../../css/b/b8dsx7j7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="elb8eobta"/><path class="b8dsx7j7w"/></g>`,
		"fallback": "streamline-plump:gift",
	});
}

export default Component;
