import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy0ndupne.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy0ndupne"/>`,
		"fallback": "f7:arrow-down-left-square-fill",
	});
}

export default Component;
