import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/swg5p7vax.css';
import '../../css/m/m9587_b1g.css';
import '../../css/s/sp3ujwwyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="swg5p7vax"/><path class="m9587_b1g"/><path class="sp3ujwwyq"/></g>`,
		"fallback": "keyline-icons:bot-duotone",
	});
}

export default Component;
