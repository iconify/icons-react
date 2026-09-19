import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y-1omny8w.css';
import '../../css/u/ub5eqcb3m.css';
import '../../css/p/pxs4nqqar.css';
import '../../css/x/xxkgek8_q.css';
import '../../css/n/nwbhjwbif.css';
import '../../css/x/xhsyo2vhl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="y-1omny8w"/><path class="ub5eqcb3m"/><path class="pxs4nqqar"/><path class="xxkgek8_q"/><path class="nwbhjwbif"/><path class="xhsyo2vhl"/></g>`,
		"fallback": "icon-park:database-setting",
	});
}

export default Component;
