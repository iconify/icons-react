import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbt28cbiy.css';
import '../../css/k/k14kl3b3g.css';
import '../../css/b/bifxbsbpm.css';
import '../../css/o/o9-b8bd3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qbt28cbiy"/><path class="k14kl3b3g"/><path class="bifxbsbpm"/><path class="o9-b8bd3l"/></g>`,
		"fallback": "andrsrxn:dove",
	});
}

export default Component;
