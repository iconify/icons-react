import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac-3z-sub.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac-3z-sub"/>`,
		"fallback": "carbon:automatic",
	});
}

export default Component;
