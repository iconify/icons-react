import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oxjent7ci.css';
import '../../css/o/ofyql2bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oxjent7ci"/><path class="ofyql2bpl"/></g>`,
		"fallback": "keyline-icons:hammer-duotone",
	});
}

export default Component;
