import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n87947b0o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n87947b0o"/>`,
		"fallback": "carbon:eyedropper",
	});
}

export default Component;
