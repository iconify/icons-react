import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qku9p_bvt.css';
import '../../css/o/ozt8xgb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qku9p_bvt"/><path class="ozt8xgb3m"/></g>`,
		"fallback": "keyline-icons:hat-glasses-two-tone",
	});
}

export default Component;
