import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc_a9dblh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc_a9dblh"/>`,
		"fallback": "selfhst:fli-so-dark",
	});
}

export default Component;
