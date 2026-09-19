import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4ql3x9ff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4ql3x9ff"/>`,
		"fallback": "ion:code-download-outline",
	});
}

export default Component;
