import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e9bm3i9jh.css';
import '../../css/a/a4ms69b5n.css';
import '../../css/b/bf0_kdbgt.css';
import '../../css/t/trdpk-b6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e9bm3i9jh"/><circle class="a4ms69b5n"/><circle class="bf0_kdbgt"/><circle class="trdpk-b6y"/></g>`,
		"fallback": "icon-park-outline:anchor-round",
	});
}

export default Component;
