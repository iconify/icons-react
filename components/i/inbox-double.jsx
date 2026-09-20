import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1i1mgbez.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1i1mgbez"/>`,
		"fallback": "quill:inbox-double",
	});
}

export default Component;
