import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wfz69ubcx.css';
import '../../css/y/ys1pfks_j.css';
import '../../css/l/lmpy1qbdk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="wfz69ubcx"/><path class="ys1pfks_j"/><path class="lmpy1qbdk"/></g>`,
		"fallback": "icon-park-outline:bread-one",
	});
}

export default Component;
