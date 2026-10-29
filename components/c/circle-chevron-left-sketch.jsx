import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o7q1r2bvo.css';
import '../../css/t/ttgol1b5u.css';
import '../../css/c/cgfote1dz.css';
import '../../css/r/rhz0hmbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o7q1r2bvo"/><path class="ttgol1b5u wm-a"/><path class="cgfote1dz wm-k"/><path class="rhz0hmbrm wm-a"/></g>`,
		"fallback": "withicons:circle-chevron-left-sketch",
	});
}

export default Component;
