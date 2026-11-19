import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zf1mwsbpe.css';
import '../../css/f/fguej6dmd.css';
import '../../css/x/xxrcjybzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zf1mwsbpe"/><path class="fguej6dmd"/><path class="xxrcjybzx"/></g>`,
		"fallback": "andrsrxn:cloud-sparkle",
	});
}

export default Component;
