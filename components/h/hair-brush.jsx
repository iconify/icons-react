import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p8vflebyb.css';
import '../../css/e/evhup9oie.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="p8vflebyb"/><rect transform="rotate(45 16.075 29.303)" class="evhup9oie"/></g>`,
		"fallback": "icon-park-outline:hair-brush",
	});
}

export default Component;
