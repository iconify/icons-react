import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dy3fzc62t.css';
import '../../css/x/xuoz331um.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dy3fzc62t"/><path class="xuoz331um"/></g>`,
		"fallback": "icon-park-outline:clothes-pants",
	});
}

export default Component;
