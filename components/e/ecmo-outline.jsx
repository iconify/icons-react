import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rvyiw_b9t.css';
import '../../css/q/qtvlg1i-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rvyiw_b9t"/><path class="qtvlg1i-k"/></g>`,
		"fallback": "healthicons:ecmo-outline",
	});
}

export default Component;
