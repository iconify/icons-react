import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cowtcfb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cowtcfb4g"/>`,
		"fallback": "uil:comment-alt-redo",
	});
}

export default Component;
