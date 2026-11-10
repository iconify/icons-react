import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3vmxny-a.css';
import '../../css/b/b9hbrlbiz.css';
import '../../css/y/yg4a90bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3vmxny-a"/><path class="b9hbrlbiz"/><path class="yg4a90bou"/></g>`,
		"fallback": "andrsrxn:file-divide",
	});
}

export default Component;
