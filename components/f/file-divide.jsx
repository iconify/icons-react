import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pc12f6b-x.css';
import '../../css/d/d2cm7jb3w.css';
import '../../css/y/yg4a90bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pc12f6b-x"/><path class="d2cm7jb3w"/><path class="yg4a90bou"/></g>`,
		"fallback": "andrsrxn:file-divide",
	});
}

export default Component;
