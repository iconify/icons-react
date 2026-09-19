import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/ob3i2p4ac.css';
import '../../css/l/l_mxf2blx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ob3i2p4ac"/><path class="l_mxf2blx"/></g>`,
		"fallback": "icon-park-outline:date-comes-back",
	});
}

export default Component;
