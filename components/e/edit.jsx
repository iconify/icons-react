import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1r28zbji.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1r28zbji"/>`,
		"fallback": "uiw:edit",
	});
}

export default Component;
