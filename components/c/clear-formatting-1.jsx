import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as0w8qbol.css';
import '../../css/u/um_0zeb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="as0w8qbol"/><path class="um_0zeb_k"/></g>`,
		"fallback": "tdesign:clear-formatting-1",
	});
}

export default Component;
