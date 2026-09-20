import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/sz-0w92_t.css';
import '../../css/v/vl62dnhlu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="sz-0w92_t"/><path class="vl62dnhlu"/></g>`,
		"fallback": "streamline-plump:dashboard-1",
	});
}

export default Component;
