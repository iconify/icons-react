import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dndr6q80t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dndr6q80t"/>`,
		"fallback": "fa7-regular:circle",
	});
}

export default Component;
