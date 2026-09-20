import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/b/b8vh_x-7p.css';
import '../../css/t/tzfb_7bpq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="b8vh_x-7p"/><path class="tzfb_7bpq"/></g>`,
		"fallback": "streamline-color:delete-keyboard",
	});
}

export default Component;
