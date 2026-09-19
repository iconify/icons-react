import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_rob8gfe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_rob8gfe"/>`,
		"fallback": "f7:forward-end",
	});
}

export default Component;
