import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnj-uwb7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnj-uwb7t"/>`,
		"fallback": "at-icons:checkmark-in-square",
	});
}

export default Component;
