import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/ftnnt4b-s.css';
import '../../css/i/iwk_ym9zp.css';
import '../../css/t/tuv9vbcyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ftnnt4b-s"/><path class="iwk_ym9zp"/><path class="tuv9vbcyv"/></g>`,
		"fallback": "humbleicons:document-remove",
	});
}

export default Component;
