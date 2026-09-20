import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qe54fbbdm.css';
import '../../css/z/z5ocq1cuj.css';
import '../../css/q/q_rj_gbbm.css';
import '../../css/d/dd0u9dtll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qe54fbbdm"/><path class="z5ocq1cuj"/><path class="q_rj_gbbm"/><path class="dd0u9dtll"/></g>`,
		"fallback": "tdesign:cola",
	});
}

export default Component;
