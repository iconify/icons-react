import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/teqqe-b2q.css';
import '../../css/i/i3k98mbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="teqqe-b2q"/><path class="i3k98mbdt"/></g>`,
		"fallback": "keyline-icons:git-join-fill",
	});
}

export default Component;
