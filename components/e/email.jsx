import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8qptonhk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8qptonhk"/>`,
		"fallback": "oui:email",
	});
}

export default Component;
