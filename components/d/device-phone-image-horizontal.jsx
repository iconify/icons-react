import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mw_hogzch.css';
import '../../css/e/ez1fa5boc.css';
import '../../css/e/e1nkl0b7d.css';
import '../../css/o/oyw5lob6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mw_hogzch"/><path class="ez1fa5boc"/><path class="e1nkl0b7d"/><path class="oyw5lob6m"/></g>`,
		"fallback": "andrsrxn:device-phone-image-horizontal",
	});
}

export default Component;
