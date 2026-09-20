import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eey-7uxwn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eey-7uxwn"/>`,
		"fallback": "pinhead:fish-under-paragraph",
	});
}

export default Component;
