import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mj32xlbaz.css';
import '../../css/j/j7kqt4bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mj32xlbaz"/><path class="j7kqt4bsy"/></g>`,
		"fallback": "keyline-icons:brain-sparkles",
	});
}

export default Component;
