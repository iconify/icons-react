import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uub0g_gkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uub0g_gkz"/>`,
		"fallback": "thesvg-color:deutsche-post",
	});
}

export default Component;
