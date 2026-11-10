import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hd-wdbcpz.css';
import '../../css/b/bj4chgg5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hd-wdbcpz"/><path class="bj4chgg5f"/></g>`,
		"fallback": "andrsrxn:compare",
	});
}

export default Component;
