import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pgoy4ib5g.css';
import '../../css/p/pftnf9bpg.css';
import '../../css/p/p196trped.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="pgoy4ib5g"/><path class="pftnf9bpg"/><path class="p196trped"/></g>`,
		"fallback": "iconamoon:information-square-light",
	});
}

export default Component;
