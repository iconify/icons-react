import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vr1sp4wvj.css';
import '../../css/w/wk8xqn0-q.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsAsthmaInhalerNegative0)" class="cuyn6tgcc"><path class="vr1sp4wvj"/><path clip-rule="evenodd" class="wk8xqn0-q"/></g><defs><clipPath id="healthiconsAsthmaInhalerNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:asthma-inhaler-negative",
	});
}

export default Component;
