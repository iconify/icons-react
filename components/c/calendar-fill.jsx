import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e1i4hn8sv.css';
import '../../css/y/ypi7oeb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="e1i4hn8sv"/><path class="ypi7oeb6e"/></g>`,
		"fallback": "keyline-icons:calendar-fill",
	});
}

export default Component;
