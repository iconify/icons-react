import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x-5w1fb0e.css';
import '../../css/h/hax8mkbsy.css';
import '../../css/o/o-e2kpb1y.css';
import '../../css/k/kowmqukzb.css';
import '../../css/r/rne9lqbvm.css';
import '../../css/l/l_lmp1bvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="x-5w1fb0e"/><circle class="hax8mkbsy"/><circle class="o-e2kpb1y"/><circle class="kowmqukzb"/><circle class="rne9lqbvm"/><circle class="l_lmp1bvv"/></g>`,
		"fallback": "lucide:grip-horizontal",
	});
}

export default Component;
