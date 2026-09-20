import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yw3kbde_g.css';
import '../../css/i/icn76kbna.css';
import '../../css/k/khzkibcfv.css';
import '../../css/g/g69ez5b_t.css';
import '../../css/x/xbty9ccox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yw3kbde_g"/><path class="icn76kbna"/><path class="khzkibcfv"/><path class="g69ez5b_t"/><path class="xbty9ccox"/></g>`,
		"fallback": "streamline-freehand-color:email-action-remove",
	});
}

export default Component;
