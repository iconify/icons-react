import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h-gu33b2a.css';
import '../../css/v/vbp-vzbjn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="h-gu33b2a"/><path class="vbp-vzbjn"/></g>`,
		"fallback": "icon-park-outline:currency",
	});
}

export default Component;
