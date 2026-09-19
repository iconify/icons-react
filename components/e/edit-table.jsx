import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v732mlbef.css';
import '../../css/y/ytjynlk3k.css';
import '../../css/d/d01e2fcdl.css';
import '../../css/k/kbhe1nbwf.css';
import '../../css/w/wg78zkb7p.css';
import '../../css/u/uss5mt9io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v732mlbef"/><path class="ytjynlk3k"/><path class="d01e2fcdl"/><path class="kbhe1nbwf"/><path class="wg78zkb7p"/><path class="uss5mt9io"/></g>`,
		"fallback": "hugeicons:edit-table",
	});
}

export default Component;
