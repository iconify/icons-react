import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7g_-gpr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp7g_-gpr"/>`,
		"fallback": "selfhst:instapods",
	});
}

export default Component;
