import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0jek1b_q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r0jek1b_q"/>`,
		"fallback": "heroicons:arrow-left-16-solid",
	});
}

export default Component;
