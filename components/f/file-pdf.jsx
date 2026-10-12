import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7u62kbpc.css';
import '../../css/x/x9d8yiw5q.css';
import '../../css/n/ndqmjehdm.css';
import '../../css/g/gjkl8e8oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7u62kbpc"/><path class="x9d8yiw5q"/><path class="ndqmjehdm"/><path class="gjkl8e8oi"/></g>`,
		"fallback": "andrsrxn:file-pdf",
	});
}

export default Component;
