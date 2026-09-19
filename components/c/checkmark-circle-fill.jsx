import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyj3p-b1w.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyj3p-b1w"/>`,
		"fallback": "f7:checkmark-circle-fill",
	});
}

export default Component;
