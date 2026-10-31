import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qc9puxbvd.css';
import '../../css/i/iqcv3-mbo.css';
import '../../css/k/koy68obkn.css';
import '../../css/j/jqoywtypg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qc9puxbvd wm-shadow"/><path class="iqcv3-mbo wm-shadow"/><path class="koy68obkn"/><path class="jqoywtypg"/></g>`,
		"fallback": "withicons-brutal:chart-area",
	});
}

export default Component;
