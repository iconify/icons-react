import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz3g_ob0v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz3g_ob0v"/>`,
		"fallback": "maki:castle-jp",
	});
}

export default Component;
