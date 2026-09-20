import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn88f4bao.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn88f4bao"/>`,
		"fallback": "system-uicons:folder-minus",
	});
}

export default Component;
