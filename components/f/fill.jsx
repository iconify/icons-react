import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/b/b7_xhhban.css';
import '../../css/u/un1a5-7pv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="r8cyu3bwz"/><path class="b7_xhhban"/><path class="un1a5-7pv"/></g>`,
		"fallback": "icon-park-outline:fill",
	});
}

export default Component;
