import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fk68dsbja.css';
import '../../css/r/rus1vdoss.css';
import '../../css/s/s1albsb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fk68dsbja"/><path class="rus1vdoss"/><path class="s1albsb-s"/></g>`,
		"fallback": "tabler:hexagon-3d",
	});
}

export default Component;
