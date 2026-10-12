import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zywadkp0q.css';
import '../../css/b/b5j1i2bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zywadkp0q"/><path class="b5j1i2bsb"/></g>`,
		"fallback": "andrsrxn:divider",
	});
}

export default Component;
