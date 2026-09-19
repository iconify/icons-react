import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i_v6csbnt.css';
import '../../css/q/q0d0g9bjc.css';
import '../../css/r/rll79qfro.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="i_v6csbnt"/><path class="q0d0g9bjc"/><path class="rll79qfro"/></g>`,
		"fallback": "icon-park:ce-marking",
	});
}

export default Component;
