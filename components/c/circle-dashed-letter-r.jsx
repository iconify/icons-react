import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhs9oua6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhs9oua6e"/>`,
		"fallback": "tabler:circle-dashed-letter-r",
	});
}

export default Component;
