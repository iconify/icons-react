import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j2whz3qht.css';
import '../../css/o/oofikhb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j2whz3qht"/><path class="oofikhb0u"/></g>`,
		"fallback": "keyline-icons:cursor-signal-duotone",
	});
}

export default Component;
