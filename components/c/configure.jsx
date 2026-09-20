import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t99gmo0wz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t99gmo0wz"/>`,
		"fallback": "ooui:configure",
	});
}

export default Component;
