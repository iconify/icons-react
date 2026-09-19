import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx_lz50_l.css';
import '../../css/l/l2nst-b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx_lz50_l"/><path class="l2nst-b0v"/>`,
		"fallback": "eva:file-add-outline",
	});
}

export default Component;
