import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp04_1btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp04_1btn"/>`,
		"fallback": "bx:bxs-plane",
	});
}

export default Component;
