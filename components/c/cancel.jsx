import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhjsrbc8n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhjsrbc8n"/>`,
		"fallback": "fa7-solid:cancel",
	});
}

export default Component;
