import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o2kxdab3p.css';
import '../../css/m/m2frt4tro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="o2kxdab3p"/><path class="m2frt4tro"/></g>`,
		"fallback": "keyline-icons:alarm-clock-plus-fill",
	});
}

export default Component;
