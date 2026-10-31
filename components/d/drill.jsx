import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/avszpm_ny.css';
import '../../css/m/mw43cpe9m.css';
import '../../css/s/sypb6fb5i.css';
import '../../css/q/q3ffho86m.css';
import '../../css/e/extifubwu.css';
import '../../css/h/hnn9z8_tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="avszpm_ny wm-shadow"/><path class="mw43cpe9m"/><path class="sypb6fb5i"/><path class="q3ffho86m"/><path class="extifubwu"/><path class="hnn9z8_tj"/></g>`,
		"fallback": "withicons-retro:drill",
	});
}

export default Component;
