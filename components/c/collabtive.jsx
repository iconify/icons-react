import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_5hb_i8b.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_5hb_i8b"/>`,
		"fallback": "whh:collabtive",
	});
}

export default Component;
