import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz_dv7bxn.css';
import '../../css/a/aikx1pj2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz_dv7bxn"/><path class="aikx1pj2f"/>`,
		"fallback": "pixel:book-heart",
	});
}

export default Component;
