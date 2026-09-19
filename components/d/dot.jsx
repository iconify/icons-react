import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ud0nijbwt.css';
import '../../css/q/qk26bcbiu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ud0nijbwt"/><path class="qk26bcbiu"/></g>`,
		"fallback": "cryptocurrency-color:dot",
	});
}

export default Component;
