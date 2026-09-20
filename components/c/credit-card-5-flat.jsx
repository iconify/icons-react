import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtiifvzmi.css';
import '../../css/j/jbfqibceq.css';
import '../../css/k/kc2uqnbyi.css';
import '../../css/p/pfb14lbwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qtiifvzmi"/><path class="jbfqibceq"/><path class="kc2uqnbyi"/><path clip-rule="evenodd" class="pfb14lbwh"/></g>`,
		"fallback": "streamline-plump-color:credit-card-5-flat",
	});
}

export default Component;
