import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fke06d2_d.css';
import '../../css/y/yycbyshmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fke06d2_d"/><path class="yycbyshmf"/></g>`,
		"fallback": "lets-icons:file-dock-add-fill",
	});
}

export default Component;
