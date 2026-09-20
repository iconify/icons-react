import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/g70z56b6i.css';
import '../../css/w/wqj33hb5g.css';
import '../../css/z/zggadzblb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="g70z56b6i"/><path class="wqj33hb5g"/><path class="zggadzblb"/></g>`,
		"fallback": "streamline-plump:calendar-check",
	});
}

export default Component;
