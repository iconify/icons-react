import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_hti76ob.css';
import '../../css/j/j9tli0b-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n_hti76ob"/><path class="j9tli0b-m"/></g>`,
		"fallback": "keyline-icons:cloud-rain-duotone",
	});
}

export default Component;
