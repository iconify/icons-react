import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rgnd6_bms.css';
import '../../css/w/wrd15gbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="rgnd6_bms"/><path class="wrd15gbfv"/></g>`,
		"fallback": "lucide-lab:escalator-arrow-down-left",
	});
}

export default Component;
