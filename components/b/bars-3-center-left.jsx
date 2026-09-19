import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw5o7jb2m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xw5o7jb2m"/>`,
		"fallback": "heroicons-solid:bars-3-center-left",
	});
}

export default Component;
