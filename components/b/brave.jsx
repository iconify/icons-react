import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8q8fgbqd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8q8fgbqd"/>`,
		"fallback": "fa6-brands:brave",
	});
}

export default Component;
