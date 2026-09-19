import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rktzx0bbx.css';
import '../../css/l/lyl8spbuz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rktzx0bbx"/><path class="lyl8spbuz"/></g>`,
		"fallback": "icon-park-outline:folder-withdrawal-one",
	});
}

export default Component;
