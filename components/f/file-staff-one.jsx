import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q9-lp-bba.css';
import '../../css/p/prsmy6-7i.css';
import '../../css/e/exb2_mxkj.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="q9-lp-bba"/><circle class="prsmy6-7i"/><path class="exb2_mxkj"/><path class="lxqch5bjp"/></g>`,
		"fallback": "icon-park:file-staff-one",
	});
}

export default Component;
