import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j51f-ebgg.css';
import '../../css/f/fwwb0h1th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j51f-ebgg"/><path class="fwwb0h1th"/></g>`,
		"fallback": "tabler:building-carousel",
	});
}

export default Component;
