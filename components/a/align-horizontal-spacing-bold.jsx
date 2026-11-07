import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co9si1b_r.css';
import '../../css/a/ansfvlgtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="co9si1b_r"/><path class="ansfvlgtt"/>`,
		"fallback": "solar:align-horizontal-spacing-bold",
	});
}

export default Component;
