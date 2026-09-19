import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dx6c4tn2r.css';
import '../../css/r/r3z32eb1y.css';
import '../../css/j/j1xjnqltu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dx6c4tn2r"/><circle class="r3z32eb1y"/><path class="j1xjnqltu"/></g>`,
		"fallback": "icon-park-outline:big-clock",
	});
}

export default Component;
