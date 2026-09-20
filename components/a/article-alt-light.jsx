import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9de7-b_e.css';
import '../../css/h/h1_k5rbwm.css';
import '../../css/m/mn4nm1bln.css';
import '../../css/c/cr15h6-7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9de7-b_e"/><path class="h1_k5rbwm"/><path clip-rule="evenodd" class="mn4nm1bln"/><path class="cr15h6-7z"/>`,
		"fallback": "stash:article-alt-light",
	});
}

export default Component;
