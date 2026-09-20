import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eyrt5yb7l.css';
import '../../css/o/ou_oi1b_j.css';
import '../../css/q/qhdghc5-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eyrt5yb7l"/><path class="ou_oi1b_j"/><path class="qhdghc5-a"/></g>`,
		"fallback": "streamline-sharp:curves-levels-graph",
	});
}

export default Component;
