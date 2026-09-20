import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xts69-brj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xts69-brj"/>`,
		"fallback": "quill:checkmark-double",
	});
}

export default Component;
