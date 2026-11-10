import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfo6tr8zj.css';
import '../../css/i/irgx0mbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfo6tr8zj"/><path class="irgx0mbxo"/></g>`,
		"fallback": "andrsrxn:agent-off",
	});
}

export default Component;
