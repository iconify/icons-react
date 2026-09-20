import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ooa90mb3c.css';
import '../../css/h/hq54ggm8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ooa90mb3c"/><path class="hq54ggm8l"/></g>`,
		"fallback": "tabler:direction-sign",
	});
}

export default Component;
