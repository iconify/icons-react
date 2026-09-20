import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-ar-or6k.css';
import '../../css/m/msrvwjbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-ar-or6k"/><path clip-rule="evenodd" class="msrvwjbgz"/></g>`,
		"fallback": "majesticons:image-off",
	});
}

export default Component;
