import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n93wedc1i.css';
import '../../css/k/k53r_hboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n93wedc1i"/><path class="k53r_hboz"/></g>`,
		"fallback": "coolicons:door-duocolor-round",
	});
}

export default Component;
