import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/augzmwl8c.css';
import '../../css/r/rc0brcrfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="augzmwl8c"/><path class="rc0brcrfr"/></g>`,
		"fallback": "si:credit-card-detailed-duotone",
	});
}

export default Component;
