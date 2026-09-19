import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cx9cnc_3r.css';
import '../../css/y/yx4dqrbvg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="cx9cnc_3r"/><path class="yx4dqrbvg"/></g>`,
		"fallback": "icon-park-outline:basketball-stand",
	});
}

export default Component;
