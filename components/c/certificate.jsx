import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/q/qzawyhbdo.css';
import '../../css/c/c7b8r-bgz.css';
import '../../css/l/lhtpemjiw.css';
import '../../css/d/dzvhn5-sy.css';
import '../../css/n/ng2xfabay.css';
import '../../css/l/lozhjabns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="qzawyhbdo"/><path class="c7b8r-bgz"/><path class="lhtpemjiw"/><path class="dzvhn5-sy"/><path class="ng2xfabay"/><path class="lozhjabns"/></g>`,
		"fallback": "icon-park:certificate",
	});
}

export default Component;
