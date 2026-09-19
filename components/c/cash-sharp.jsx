import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqasnxb9d.css';
import '../../css/f/fxii5_bsg.css';
import '../../css/a/ac_65uciq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqasnxb9d"/><path class="fxii5_bsg"/><circle class="ac_65uciq"/>`,
		"fallback": "ion:cash-sharp",
	});
}

export default Component;
