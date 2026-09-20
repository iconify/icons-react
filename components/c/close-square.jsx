import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy-64abzi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy-64abzi"/>`,
		"fallback": "uiw:close-square",
	});
}

export default Component;
