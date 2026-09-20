import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/c0rjf9bvl.css';
import '../../css/y/yjafq1-8s.css';
import '../../css/d/dqin9zk9a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="c0rjf9bvl"/><path class="yjafq1-8s"/><path class="dqin9zk9a"/></g>`,
		"fallback": "streamline-plump:high-speed-train-side",
	});
}

export default Component;
