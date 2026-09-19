import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mknl414ue.css';
import '../../css/k/k18-gvbwt.css';
import '../../css/d/dwfl5yb9r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mknl414ue"/><path class="k18-gvbwt"/><path class="dwfl5yb9r"/></g>`,
		"fallback": "healthicons:default-outline",
	});
}

export default Component;
