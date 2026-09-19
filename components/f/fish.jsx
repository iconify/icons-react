import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk6vyibdd.css';
import '../../css/l/l54-ggj_x.css';
import '../../css/q/q8ka5erct.css';
import '../../css/e/ecy-d8bfh.css';
import '../../css/v/vc18o9_2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qk6vyibdd"/><path class="l54-ggj_x"/><path class="q8ka5erct"/><circle transform="rotate(45 33.766 14.46)" class="ecy-d8bfh"/><path class="vc18o9_2j"/></g>`,
		"fallback": "icon-park-outline:fish",
	});
}

export default Component;
