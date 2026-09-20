import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy_v5jb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uy_v5jb1z"/>`,
		"fallback": "reicon:earbuds-case-open",
	});
}

export default Component;
