import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u1g94pbja.css';
import '../../css/v/v-z11g72x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u1g94pbja"/><path class="v-z11g72x"/></g>`,
		"fallback": "tabler:gas-station-off",
	});
}

export default Component;
