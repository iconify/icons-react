import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0vzs5apr.css';
import '../../css/t/toc-9jzis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0vzs5apr"/><path class="toc-9jzis"/>`,
		"fallback": "bx:bx-cloud-lightning",
	});
}

export default Component;
