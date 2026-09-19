import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/owvliobpk.css';
import '../../css/t/ts8i-ac1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="owvliobpk"/><path class="ts8i-ac1g"/></g>`,
		"fallback": "icon-park-outline:hospital-two",
	});
}

export default Component;
