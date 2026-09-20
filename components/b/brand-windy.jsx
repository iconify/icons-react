import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/on09j4qdn.css';
import '../../css/l/lud7bwb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="on09j4qdn"/><path class="lud7bwb9s"/></g>`,
		"fallback": "tabler:brand-windy",
	});
}

export default Component;
