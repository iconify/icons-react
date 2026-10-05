import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcrfikb1q.css';
import '../../css/q/qocxejb5m.css';
import '../../css/x/x6g4jobmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wcrfikb1q"><path class="qocxejb5m"/><path class="x6g4jobmg"/></g>`,
		"fallback": "matita:crop",
	});
}

export default Component;
