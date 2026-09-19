import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q1yp69b_l.css';
import '../../css/x/xx7uvyb5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="q1yp69b_l"/><path class="xx7uvyb5a"/></g>`,
		"fallback": "icon-park-outline:corner-down-right",
	});
}

export default Component;
