import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nagtiqban.css';
import '../../css/t/to2zchgfu.css';
import '../../css/c/cswwhib7x.css';
import '../../css/x/xjdiaqb1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="nagtiqban"/><circle class="to2zchgfu"/><circle class="cswwhib7x"/><circle class="xjdiaqb1z"/></g>`,
		"fallback": "icon-park-outline:blockchain",
	});
}

export default Component;
