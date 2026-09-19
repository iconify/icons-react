import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-d65nber.css';
import '../../css/j/je17xlb_m.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-d65nber"/><path class="je17xlb_m"/>`,
		"fallback": "foundation:folder-lock",
	});
}

export default Component;
