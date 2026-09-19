import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5ku5msfg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5ku5msfg"/>`,
		"fallback": "fa7-solid:chevron-circle-up",
	});
}

export default Component;
