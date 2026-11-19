import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmygky49z.css';
import '../../css/z/zrq-0toal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gmygky49z"/><path class="zrq-0toal"/></g>`,
		"fallback": "andrsrxn:artboard-x",
	});
}

export default Component;
