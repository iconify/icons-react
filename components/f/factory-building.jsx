import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lbk7xcb_i.css';
import '../../css/p/pfy9ymbjm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lbk7xcb_i"/><path class="pfy9ymbjm"/></g>`,
		"fallback": "icon-park-outline:factory-building",
	});
}

export default Component;
