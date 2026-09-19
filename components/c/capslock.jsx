import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph9q5h07s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph9q5h07s"/>`,
		"fallback": "bi:capslock",
	});
}

export default Component;
