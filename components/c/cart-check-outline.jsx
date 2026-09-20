import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mafgtablf.css';
import '../../css/q/q-vxnsbbp.css';
import '../../css/k/kw39cfx6s.css';
import '../../css/y/yeb076bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mafgtablf"/><path clip-rule="evenodd" class="q-vxnsbbp"/><path clip-rule="evenodd" class="kw39cfx6s"/><path clip-rule="evenodd" class="yeb076bmv"/></g>`,
		"fallback": "solar:cart-check-outline",
	});
}

export default Component;
