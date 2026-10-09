import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6p6i_bqp.css';
import '../../css/n/n-w6_w_ot.css';
import '../../css/t/to4xcybuh.css';
import '../../css/q/qxvivc_pc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6p6i_bqp"/><path class="n-w6_w_ot"/><path class="to4xcybuh"/><path class="qxvivc_pc"/>`,
		"fallback": "energy-icons:charge-card-48",
	});
}

export default Component;
