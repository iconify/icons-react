import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cya-rzp4a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cya-rzp4a"/>`,
		"fallback": "carbon:caret-sort",
	});
}

export default Component;
