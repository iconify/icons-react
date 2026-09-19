import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e7lmpc1qb.css';
import '../../css/n/npiz6qlvn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="e7lmpc1qb"/><path class="npiz6qlvn"/></g>`,
		"fallback": "icon-park-outline:hanger",
	});
}

export default Component;
