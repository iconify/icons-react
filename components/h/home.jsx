import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i6kc7l_0v.css';
import '../../css/p/p2ls8evah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i6kc7l_0v"/><path class="p2ls8evah"/></g>`,
		"fallback": "codex:home",
	});
}

export default Component;
