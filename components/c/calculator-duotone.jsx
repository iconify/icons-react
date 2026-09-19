import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/depsr9bpv.css';
import '../../css/q/qkvg0k9nh.css';
import '../../css/x/x3323yb5k.css';
import '../../css/y/ybzq69bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="depsr9bpv"/><path class="qkvg0k9nh"/><path class="x3323yb5k"/><path class="ybzq69bkf"/></g>`,
		"fallback": "iconamoon:calculator-duotone",
	});
}

export default Component;
