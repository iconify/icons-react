import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mlv6tlbcz.css';
import '../../css/k/k7j1so51n.css';
import '../../css/p/p6xi2ub-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mlv6tlbcz"/><path class="k7j1so51n"/><path class="p6xi2ub-t"/></g>`,
		"fallback": "ix:add-application",
	});
}

export default Component;
