import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pad33htyl.css';
import '../../css/r/recf_mbam.css';
import '../../css/l/l7gc7657t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pad33htyl"/><path class="recf_mbam"/><path class="l7gc7657t"/></g>`,
		"fallback": "andrsrxn:box-search",
	});
}

export default Component;
