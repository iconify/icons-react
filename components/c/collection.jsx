import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rreixub1u.css';
import '../../css/e/ezppmdskh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rreixub1u"/><path class="ezppmdskh"/></g>`,
		"fallback": "tdesign:collection",
	});
}

export default Component;
