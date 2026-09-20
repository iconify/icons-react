import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/un748sgfd.css';
import '../../css/j/jbg64mbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="un748sgfd"/><path class="jbg64mbay"/></g>`,
		"fallback": "keyline-icons:bird",
	});
}

export default Component;
