import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe0v8glqu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe0v8glqu"/>`,
		"fallback": "f7:chevron-compact-left",
	});
}

export default Component;
