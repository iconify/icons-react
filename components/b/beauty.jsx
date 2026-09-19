import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ueqtqjl_z.css';
import '../../css/j/j4r7k_ibd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ueqtqjl_z"/><path class="j4r7k_ibd"/></g>`,
		"fallback": "icon-park-outline:beauty",
	});
}

export default Component;
