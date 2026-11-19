import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px_qv2v2h.css';
import '../../css/b/bjeyb8bmk.css';
import '../../css/q/qn7-veb5f.css';
import '../../css/b/bfhxsz8gp.css';
import '../../css/b/by1snq5ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="px_qv2v2h"/><path class="bjeyb8bmk"/><path class="qn7-veb5f"/><circle class="bfhxsz8gp"/><path class="by1snq5ag"/></g>`,
		"fallback": "andrsrxn:brain-settings",
	});
}

export default Component;
