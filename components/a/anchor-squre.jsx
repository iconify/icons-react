import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e9bm3i9jh.css';
import '../../css/t/trdpk-b6y.css';
import '../../css/l/lpi2p7bmg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e9bm3i9jh"/><circle class="trdpk-b6y"/><path class="lpi2p7bmg"/></g>`,
		"fallback": "icon-park-outline:anchor-squre",
	});
}

export default Component;
