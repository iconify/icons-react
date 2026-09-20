import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p6-k_8z1s.css';
import '../../css/j/jqn-to-yb.css';
import '../../css/l/le6y6pbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p6-k_8z1s"/><path class="jqn-to-yb"/><path class="le6y6pbtm"/></g>`,
		"fallback": "reicon:clock3",
	});
}

export default Component;
