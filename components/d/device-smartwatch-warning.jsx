import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffkfc4bxc.css';
import '../../css/u/ugkloo4ck.css';
import '../../css/b/btj6uo__h.css';
import '../../css/z/z8e1utbup.css';
import '../../css/v/vptscuw5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 7.23 5.29)" class="ffkfc4bxc"/><rect transform="rotate(-90 7.23 22.2)" class="ugkloo4ck"/><rect transform="rotate(-90 4.83 18.71)" class="btj6uo__h"/><path class="z8e1utbup"/><path class="vptscuw5k"/></g>`,
		"fallback": "andrsrxn:device-smartwatch-warning",
	});
}

export default Component;
