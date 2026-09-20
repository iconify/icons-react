import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpmsbpb3p.css';
import '../../css/e/en7axqbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mpmsbpb3p"/><path class="en7axqbsl"/></g>`,
		"fallback": "tabler:chart-circles",
	});
}

export default Component;
