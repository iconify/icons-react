import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdfrg5bbj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xdfrg5bbj"/>`,
		"fallback": "pepicons-pencil:hand-grab",
	});
}

export default Component;
