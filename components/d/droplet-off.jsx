import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j25d9_dab.css';
import '../../css/p/p8bzgqbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j25d9_dab"/><path class="p8bzgqbkl"/></g>`,
		"fallback": "vadivam:droplet-off",
	});
}

export default Component;
