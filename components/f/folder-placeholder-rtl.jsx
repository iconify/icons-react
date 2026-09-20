import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2kq5nbez.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2kq5nbez"/>`,
		"fallback": "ooui:folder-placeholder-rtl",
	});
}

export default Component;
