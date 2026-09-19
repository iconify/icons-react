import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqirs8qrr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqirs8qrr"/>`,
		"fallback": "fa7-solid:arrow-down-up-lock",
	});
}

export default Component;
