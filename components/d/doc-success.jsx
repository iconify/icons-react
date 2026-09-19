import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e2px_3bsw.css';
import '../../css/y/yd1xpjgcz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e2px_3bsw"/><path class="yd1xpjgcz"/></g>`,
		"fallback": "icon-park-outline:doc-success",
	});
}

export default Component;
