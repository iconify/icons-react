import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0arns5nu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0arns5nu"/>`,
		"fallback": "carbon:file-diff",
	});
}

export default Component;
