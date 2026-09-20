import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b84h-bczg.css';
import '../../css/n/n53fgpbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b84h-bczg"/><path class="n53fgpbbm"/></g>`,
		"fallback": "keyline-icons:building-two-tone",
	});
}

export default Component;
