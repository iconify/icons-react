import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lgmhi280s.css';
import '../../css/j/jf0-1n73s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lgmhi280s"/><path class="jf0-1n73s"/></g>`,
		"fallback": "keyline-icons:car-two-tone",
	});
}

export default Component;
