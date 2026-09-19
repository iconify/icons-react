import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ob7-etbks.css';
import '../../css/r/rk-82ybgg.css';
import '../../css/q/qiz78oq5b.css';
import '../../css/c/cltx09b8e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="ob7-etbks"/><path class="rk-82ybgg"/><path clip-rule="evenodd" class="qiz78oq5b"/><circle class="cltx09b8e"/></g>`,
		"fallback": "pepicons:info-circle-print",
	});
}

export default Component;
