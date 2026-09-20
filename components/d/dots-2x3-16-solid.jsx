import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn6np5bnj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn6np5bnj"/>`,
		"fallback": "sidekickicons:dots-2x3-16-solid",
	});
}

export default Component;
