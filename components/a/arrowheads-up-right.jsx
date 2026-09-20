import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tntkyqb0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tntkyqb0z"/>`,
		"fallback": "streamline-block:arrowheads-up-right",
	});
}

export default Component;
