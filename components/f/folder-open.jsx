import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6_v7soxw.css';
import '../../css/b/bzmv-nbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x6_v7soxw"/><path class="bzmv-nbdv"/></g>`,
		"fallback": "tdesign:folder-open",
	});
}

export default Component;
