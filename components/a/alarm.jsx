import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxog9bc0w.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxog9bc0w"/>`,
		"fallback": "f7:alarm",
	});
}

export default Component;
