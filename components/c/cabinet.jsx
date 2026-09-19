import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dskmdxbel.css';
import '../../css/z/z0k1ug9bx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dskmdxbel"/><path class="z0k1ug9bx"/>`,
		"fallback": "boxicons:cabinet",
	});
}

export default Component;
