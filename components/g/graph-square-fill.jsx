import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw__72b_p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw__72b_p"/>`,
		"fallback": "f7:graph-square-fill",
	});
}

export default Component;
