import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as0w8qbol.css';
import '../../css/i/i4jpj4btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="as0w8qbol"/><path class="i4jpj4btw"/></g>`,
		"fallback": "tdesign:clear-formatting",
	});
}

export default Component;
