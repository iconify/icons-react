import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sm2p3o1pp.css';
import '../../css/h/hxkflkbfn.css';
import '../../css/u/uctsv_j5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sm2p3o1pp"/><path class="hxkflkbfn"/><path class="uctsv_j5m"/></g>`,
		"fallback": "withicons-bauhaus:chart-network",
	});
}

export default Component;
