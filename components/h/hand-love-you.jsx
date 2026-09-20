import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fafdcgb1i.css';
import '../../css/n/nky9x70wz.css';
import '../../css/h/hwccr7b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fafdcgb1i"/><path class="nky9x70wz"/><path class="hwccr7b2j"/></g>`,
		"fallback": "tabler:hand-love-you",
	});
}

export default Component;
