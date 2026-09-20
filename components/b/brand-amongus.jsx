import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tp-bgqb0c.css';
import '../../css/r/rphh_3hbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tp-bgqb0c"/><path class="rphh_3hbp"/></g>`,
		"fallback": "tabler:brand-amongus",
	});
}

export default Component;
