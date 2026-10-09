import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lscp_lbsk.css';
import '../../css/e/euqlsybkd.css';
import '../../css/t/tliwn4baj.css';
import '../../css/y/yxnumh36j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lscp_lbsk"/><path class="euqlsybkd"/><path class="tliwn4baj"/><path class="yxnumh36j"/>`,
		"fallback": "energy-icons:energy-flow-48",
	});
}

export default Component;
