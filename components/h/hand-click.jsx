import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w2dcj8b7h.css';
import '../../css/n/n_vtn-bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w2dcj8b7h"/><path class="n_vtn-bul"/></g>`,
		"fallback": "tabler:hand-click",
	});
}

export default Component;
