import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tt35ws70e.css';
import '../../css/o/os6yplb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tt35ws70e"/><path class="os6yplb0k"/></g>`,
		"fallback": "andrsrxn:filter-x",
	});
}

export default Component;
