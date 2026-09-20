import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jm4b36wnk.css';
import '../../css/v/vv-7e8b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jm4b36wnk"/><path class="vv-7e8b7e"/></g>`,
		"fallback": "tdesign:component-breadcrumb",
	});
}

export default Component;
