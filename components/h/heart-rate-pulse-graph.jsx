import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/k8jn3jbov.css';
import '../../css/c/cxgvwrbes.css';
import '../../css/u/ut57gnb0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="k8jn3jbov"/><path class="cxgvwrbes"/><path class="ut57gnb0k"/></g>`,
		"fallback": "streamline-plump-color:heart-rate-pulse-graph",
	});
}

export default Component;
