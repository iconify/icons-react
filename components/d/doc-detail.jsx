import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/ck86b6bld.css';
import '../../css/r/r_c4ncoft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ck86b6bld"/><path class="r_c4ncoft"/></g>`,
		"fallback": "icon-park-outline:doc-detail",
	});
}

export default Component;
