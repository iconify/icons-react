import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phld-8b-v.css';
import '../../css/p/pltckst1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="phld-8b-v"/><path class="pltckst1x"/></g>`,
		"fallback": "tabler:calendar-star",
	});
}

export default Component;
