import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p77rup82s.css';
import '../../css/t/t9h4wlbpo.css';
import '../../css/c/c9xu02b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="p77rup82s"/><path class="t9h4wlbpo"/><path class="c9xu02b9v"/></g>`,
		"fallback": "iconamoon:confused-face-bold",
	});
}

export default Component;
