import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bpfv502ud.css';
import '../../css/d/d89xrq6fj.css';
import '../../css/p/pl4tptbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bpfv502ud wm-k"/><path class="d89xrq6fj wm-a"/><path class="pl4tptbmq wm-k"/></g>`,
		"fallback": "withicons-bauhaus:chart-gantt",
	});
}

export default Component;
