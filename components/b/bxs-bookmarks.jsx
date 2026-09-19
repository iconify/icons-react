import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4hvibczh.css';
import '../../css/p/p-3uqobhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4hvibczh"/><path class="p-3uqobhj"/>`,
		"fallback": "bx:bxs-bookmarks",
	});
}

export default Component;
