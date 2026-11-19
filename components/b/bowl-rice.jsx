import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/reazo4b-i.css';
import '../../css/y/yhe-7eb-w.css';
import '../../css/c/cfcak7r7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="reazo4b-i"/><path class="yhe-7eb-w"/><path class="cfcak7r7c"/></g>`,
		"fallback": "andrsrxn:bowl-rice",
	});
}

export default Component;
