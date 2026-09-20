import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcv1sbczx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcv1sbczx"/>`,
		"fallback": "ooui:bold-f",
	});
}

export default Component;
