import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qylfpj-0m.css';
import '../../css/w/whd3xiobm.css';
import '../../css/y/yeanb_bce.css';
import '../../css/s/s43s198-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qylfpj-0m"/><path clip-rule="evenodd" class="whd3xiobm"/><path class="yeanb_bce"/><path class="s43s198-h"/></g>`,
		"fallback": "andrsrxn:2fa-off",
	});
}

export default Component;
