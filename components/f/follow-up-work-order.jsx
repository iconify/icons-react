import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rktkv5b4x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rktkv5b4x"/>`,
		"fallback": "carbon:follow-up-work-order",
	});
}

export default Component;
