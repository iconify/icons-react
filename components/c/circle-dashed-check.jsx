import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_xhv5c_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_xhv5c_t"/>`,
		"fallback": "keyline-icons:circle-dashed-check",
	});
}

export default Component;
