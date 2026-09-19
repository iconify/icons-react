import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro9thljwc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro9thljwc"/>`,
		"fallback": "f7:funnel-fill",
	});
}

export default Component;
