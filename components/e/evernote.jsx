import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpy4g_b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpy4g_b_c"/>`,
		"fallback": "simple-icons:evernote",
	});
}

export default Component;
