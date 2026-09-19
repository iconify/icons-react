import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qmo-mnbwk.css';
import '../../css/v/v920rdbob.css';
import '../../css/m/ms12apbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qmo-mnbwk"/><path class="v920rdbob"/><path class="ms12apbye"/></g>`,
		"fallback": "hugeicons:court-house",
	});
}

export default Component;
