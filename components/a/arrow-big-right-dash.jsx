import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zde---bwt.css';
import '../../css/e/esbmfdf6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zde---bwt"/><path class="esbmfdf6a"/></g>`,
		"fallback": "iconaut:arrow-big-right-dash",
	});
}

export default Component;
