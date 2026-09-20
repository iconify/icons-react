import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvp2zmb6s.css';
import '../../css/j/jua_5t0el.css';
import '../../css/c/cplsnnb9q.css';
import '../../css/q/q3pp0ac8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kvp2zmb6s"/><path class="jua_5t0el"/><path class="cplsnnb9q"/><path class="q3pp0ac8v"/></g>`,
		"fallback": "streamline-cyber-color:ambulance",
	});
}

export default Component;
