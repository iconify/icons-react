import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueziy6bic.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueziy6bic"/>`,
		"fallback": "fa7-regular:hand-lizard",
	});
}

export default Component;
