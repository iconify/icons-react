import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw5pnvb2b.css';
import '../../css/c/c2wy4abda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw5pnvb2b"/><path class="c2wy4abda"/>`,
		"fallback": "uim:instagram",
	});
}

export default Component;
