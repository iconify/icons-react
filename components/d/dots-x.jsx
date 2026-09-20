import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp7wb5b_p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp7wb5b_p"/>`,
		"fallback": "pepicons-pencil:dots-x",
	});
}

export default Component;
