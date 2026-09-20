import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tno21b7vh.css';
import '../../css/m/m2frt4tro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="tno21b7vh"/><path class="m2frt4tro"/></g>`,
		"fallback": "keyline-icons:alarm-clock-check-fill",
	});
}

export default Component;
