import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9v0jib2s.css';
import '../../css/z/zbcptha7u.css';
import '../../css/i/iag247cfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o9v0jib2s"/><path class="zbcptha7u"/><path class="iag247cfu"/></g>`,
		"fallback": "andrsrxn:hand-minimize",
	});
}

export default Component;
