import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/hrq90hfel.css';
import '../../css/u/uqo8ns78h.css';
import '../../css/h/h2oz47b2x.css';
import '../../css/q/qky4o4c9z.css';
import '../../css/u/uqgcs8nnf.css';
import '../../css/t/tea00-bkz.css';
import '../../css/k/kdogmibmm.css';
import '../../css/d/dwkbmu-3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="hrq90hfel"/><path class="uqo8ns78h"/><circle class="h2oz47b2x"/><path class="qky4o4c9z"/><path class="uqgcs8nnf"/><path class="tea00-bkz"/><path class="kdogmibmm"/><path class="dwkbmu-3g"/></g>`,
		"fallback": "icon-park:death-star",
	});
}

export default Component;
