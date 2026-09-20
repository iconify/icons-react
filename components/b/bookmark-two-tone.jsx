import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a9swe9sgn.css';
import '../../css/n/nj9ik1bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a9swe9sgn"/><path class="nj9ik1bul"/></g>`,
		"fallback": "keyline-icons:bookmark-two-tone",
	});
}

export default Component;
