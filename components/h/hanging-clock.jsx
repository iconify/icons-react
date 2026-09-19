import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kaexh7bpa.css';
import '../../css/q/qppt3ts9n.css';
import '../../css/w/w-rfhehyc.css';
import '../../css/l/lq1b7q0fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="kaexh7bpa"/><circle class="qppt3ts9n"/><path class="w-rfhehyc"/><path class="lq1b7q0fi"/></g>`,
		"fallback": "hugeicons:hanging-clock",
	});
}

export default Component;
