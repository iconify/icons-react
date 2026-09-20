import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w4_echbvg.css';
import '../../css/u/uikjppxol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w4_echbvg"/><path class="uikjppxol"/></g>`,
		"fallback": "tabler:checkbox",
	});
}

export default Component;
