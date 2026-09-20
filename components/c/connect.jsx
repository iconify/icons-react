import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx_c6ibit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx_c6ibit"/>`,
		"fallback": "vaadin:connect",
	});
}

export default Component;
