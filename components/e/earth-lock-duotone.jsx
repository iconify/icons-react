import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd96o1baa.css';
import '../../css/r/r_kidir4m.css';
import '../../css/q/q3sc5f9rv.css';
import '../../css/n/nlonb-b_m.css';
import '../../css/h/halyyqb-x.css';
import '../../css/v/vmh-g7inv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dd96o1baa"/><path class="r_kidir4m"/><path class="q3sc5f9rv"/><path class="nlonb-b_m"/><path class="halyyqb-x"/><path class="vmh-g7inv"/></g>`,
		"fallback": "lucide-extended:earth-lock-duotone",
	});
}

export default Component;
