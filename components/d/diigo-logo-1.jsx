import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qot8cidje.css';
import '../../css/p/pg_rv_b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="qot8cidje"/><path class="pg_rv_b8o"/></g>`,
		"fallback": "streamline-logos:diigo-logo-1",
	});
}

export default Component;
