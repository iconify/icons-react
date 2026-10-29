import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7ql1hubg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7ql1hubg"/>`,
		"fallback": "withicons:building-2-solid",
	});
}

export default Component;
