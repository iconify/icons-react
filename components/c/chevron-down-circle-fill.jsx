import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh4l6ogtk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh4l6ogtk"/>`,
		"fallback": "f7:chevron-down-circle-fill",
	});
}

export default Component;
