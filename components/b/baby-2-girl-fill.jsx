import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sp1mbgw9c.css';
import '../../css/u/uhhbdhb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sp1mbgw9c"/><path class="uhhbdhb5n"/></g>`,
		"fallback": "keyline-icons:baby-2-girl-fill",
	});
}

export default Component;
