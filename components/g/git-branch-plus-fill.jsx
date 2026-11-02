import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orzj4k13d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orzj4k13d"/>`,
		"fallback": "mingcute:git-branch-plus-fill",
	});
}

export default Component;
