import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntcc_ys2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntcc_ys2g"/>`,
		"fallback": "ci:dropbox",
	});
}

export default Component;
