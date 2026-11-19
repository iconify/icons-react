import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrcn26bdl.css';
import '../../css/f/fv-s_bb2f.css';
import '../../css/d/dvw_0es0u.css';
import '../../css/u/ut-93677b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yrcn26bdl"/><path class="fv-s_bb2f"/><path class="dvw_0es0u"/><circle class="ut-93677b"/></g>`,
		"fallback": "andrsrxn:caduceus",
	});
}

export default Component;
