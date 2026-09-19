import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo9n_mj0n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo9n_mj0n"/>`,
		"fallback": "bi:arrow-down-short",
	});
}

export default Component;
