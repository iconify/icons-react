import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-rkljbsp.css';
import '../../css/f/fqrq_xtfe.css';
import '../../css/a/aq5gtksql.css';
import '../../css/d/dlcrhbbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-rkljbsp"/><path class="fqrq_xtfe"/><path class="aq5gtksql"/><path class="dlcrhbbld"/></g>`,
		"fallback": "lets-icons:arhive-alt-big-duotone",
	});
}

export default Component;
