import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr1lh7bho.css';
import '../../css/b/bhc0igbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr1lh7bho"/><path class="bhc0igbgz"/>`,
		"fallback": "boxicons:copy-check",
	});
}

export default Component;
