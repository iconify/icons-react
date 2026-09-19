import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9_tcobxs.css';
import '../../css/f/fj4btac-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9_tcobxs"/><path class="fj4btac-b"/>`,
		"fallback": "bx:bookmark-alt-plus",
	});
}

export default Component;
