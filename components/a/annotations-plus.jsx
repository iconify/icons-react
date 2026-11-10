import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kou9gph0k.css';
import '../../css/n/n0oad-elc.css';
import '../../css/i/il-zaab7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kou9gph0k"/><path class="n0oad-elc"/><path class="il-zaab7t"/></g>`,
		"fallback": "andrsrxn:annotations-plus",
	});
}

export default Component;
