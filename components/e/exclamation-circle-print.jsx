import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ob7-etbks.css';
import '../../css/l/lx05izb3h.css';
import '../../css/q/qiz78oq5b.css';
import '../../css/t/ts2zb-_sl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="ob7-etbks"/><path class="lx05izb3h"/><path clip-rule="evenodd" class="qiz78oq5b"/><circle class="ts2zb-_sl"/></g>`,
		"fallback": "pepicons:exclamation-circle-print",
	});
}

export default Component;
