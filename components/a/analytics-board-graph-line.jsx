import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzui81bfq.css';
import '../../css/a/ay5ndm_hw.css';
import '../../css/s/sg-qnbbln.css';
import '../../css/o/ohi-s8zgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nzui81bfq"/><path class="ay5ndm_hw"/><path class="sg-qnbbln"/><path class="ohi-s8zgn"/></g>`,
		"fallback": "streamline-ultimate-color:analytics-board-graph-line",
	});
}

export default Component;
