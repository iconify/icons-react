import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvqnng2_q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jvqnng2_q"/>`,
		"fallback": "heroicons:fire-20-solid",
	});
}

export default Component;
