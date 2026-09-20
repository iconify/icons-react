import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xnjk5tbcl.css';
import '../../css/u/ur0l-abgr.css';
import '../../css/z/zxir54b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xnjk5tbcl"/><path class="ur0l-abgr"/><path class="zxir54b-b"/></g>`,
		"fallback": "streamline-freehand-color:discount-point-coin",
	});
}

export default Component;
