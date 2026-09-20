import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/euoxl5beo.css';
import '../../css/r/r97eihbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="euoxl5beo"/><path class="r97eihbwv"/></g>`,
		"fallback": "tabler:arrow-roundabout-right",
	});
}

export default Component;
