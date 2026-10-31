import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pslo_2blm.css';
import '../../css/s/suihrkb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pslo_2blm"/><path class="suihrkb1c"/></g>`,
		"fallback": "coolicons:backpack-duocolor-round",
	});
}

export default Component;
