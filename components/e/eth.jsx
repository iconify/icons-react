import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/opqjoc4wc.css';
import '../../css/b/b53ts9b6i.css';
import '../../css/y/yrf_j1qou.css';
import '../../css/l/ll_nusmgv.css';
import '../../css/e/euq4e5bkt.css';
import '../../css/g/g6y_nbbpp.css';
import '../../css/x/x8xxgdcmo.css';
import '../../css/e/e4fx3ic5c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="opqjoc4wc"/><g class="b53ts9b6i"><path class="yrf_j1qou"/><path class="ll_nusmgv"/><path class="euq4e5bkt"/><path class="g6y_nbbpp"/><path class="x8xxgdcmo"/><path class="e4fx3ic5c"/></g></g>`,
		"fallback": "cryptocurrency-color:eth",
	});
}

export default Component;
