import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qylfpj-0m.css';
import '../../css/y/yh8uttzef.css';
import '../../css/s/s43s198-h.css';
import '../../css/k/k91zaplvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qylfpj-0m"/><path clip-rule="evenodd" class="yh8uttzef"/><path class="s43s198-h"/><path class="k91zaplvb"/></g>`,
		"fallback": "andrsrxn:ad-off",
	});
}

export default Component;
