import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qxu_e4bhc.css';
import '../../css/d/d18dx5b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qxu_e4bhc"/><path class="d18dx5b7h"/></g>`,
		"fallback": "tabler:home-off",
	});
}

export default Component;
