import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/itm0_l-ak.css';
import '../../css/c/czn22xbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="itm0_l-ak"/><path class="czn22xbbw"/></g>`,
		"fallback": "keyline-icons:circle-square-sharp-two-tone",
	});
}

export default Component;
