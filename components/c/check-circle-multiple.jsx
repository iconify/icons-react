import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fys4qbudi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fys4qbudi"/>`,
		"fallback": "pullo:check-circle-multiple",
	});
}

export default Component;
