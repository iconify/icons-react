import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jdtxjcbcf.css';
import '../../css/z/zk12ddcek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jdtxjcbcf"/><path class="zk12ddcek"/></g>`,
		"fallback": "streamline-freehand:apps-monitor-graph-line",
	});
}

export default Component;
