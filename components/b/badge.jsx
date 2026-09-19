import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/ryu-_6v4x.css';
import '../../css/i/iip-wdbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ryu-_6v4x"/><path class="iip-wdbak"/></g>`,
		"fallback": "iconamoon:badge",
	});
}

export default Component;
