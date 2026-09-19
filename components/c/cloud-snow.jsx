import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrxun4d8e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrxun4d8e"/>`,
		"fallback": "f7:cloud-snow",
	});
}

export default Component;
