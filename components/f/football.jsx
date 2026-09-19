import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b08in11er.css';
import '../../css/g/glqilnb0t.css';
import '../../css/f/fpdfbsb2s.css';
import '../../css/q/q6xa19qpi.css';
import '../../css/h/h1f00acvg.css';
import '../../css/l/lyin8cm3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="b08in11er"/><path class="glqilnb0t"/><path class="fpdfbsb2s"/><path class="q6xa19qpi"/><path class="h1f00acvg"/><path class="lyin8cm3s"/></g>`,
		"fallback": "icon-park:football",
	});
}

export default Component;
