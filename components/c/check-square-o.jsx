import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t35nljbwo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t35nljbwo"/>`,
		"fallback": "uiw:check-square-o",
	});
}

export default Component;
