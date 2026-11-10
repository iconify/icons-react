import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x14x5g79x.css';
import '../../css/e/e_8bsxbua.css';
import '../../css/f/fu-x-0bkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x14x5g79x"/><path class="e_8bsxbua"/><path class="fu-x-0bkz"/></g>`,
		"fallback": "andrsrxn:article",
	});
}

export default Component;
