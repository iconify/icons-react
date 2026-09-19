import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j7uki_xzo.css';
import '../../css/t/t7h38m1ve.css';
import '../../css/p/pdxi1upzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="j7uki_xzo"/><rect class="t7h38m1ve"/><rect class="pdxi1upzd"/></g>`,
		"fallback": "icon-park:circle-house",
	});
}

export default Component;
