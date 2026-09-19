import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vs68ofbmw.css';
import '../../css/f/f1blgkbvx.css';
import '../../css/q/qiltuobnx.css';
import '../../css/p/p5eipvbsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="vs68ofbmw"/><path class="f1blgkbvx"/><path class="qiltuobnx"/><path class="p5eipvbsq"/></g>`,
		"fallback": "icon-park-solid:fm",
	});
}

export default Component;
