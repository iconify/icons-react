import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm0aadf-e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm0aadf-e"/>`,
		"fallback": "fa7-solid:house-lock",
	});
}

export default Component;
