import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yjcw_dbin.css';
import '../../css/l/lv0avnbej.css';
import '../../css/m/m-1c--e0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yjcw_dbin"/><path class="lv0avnbej"/><path class="m-1c--e0j"/></g>`,
		"fallback": "streamline-freehand:database-share",
	});
}

export default Component;
