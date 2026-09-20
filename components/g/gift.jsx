import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnj3ysbkr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnj3ysbkr"/>`,
		"fallback": "quill:gift",
	});
}

export default Component;
