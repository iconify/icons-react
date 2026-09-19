import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eqg_32bbr.css';
import '../../css/p/pgwj559ot.css';
import '../../css/d/deucknbez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eqg_32bbr"/><path class="pgwj559ot"/><path class="deucknbez"/></g>`,
		"fallback": "healthicons:bandaged2x-outline",
	});
}

export default Component;
