import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnsk1ccqt.css';
import '../../css/p/pdtyp5bhv.css';
import '../../css/i/iic4yoh9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="gnsk1ccqt"/><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="pdtyp5bhv"/><path class="iic4yoh9o"/></g>`,
		"fallback": "andrsrxn:asterisk-circle",
	});
}

export default Component;
