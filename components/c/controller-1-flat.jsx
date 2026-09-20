import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztxdxeb0h.css';
import '../../css/d/d9841qbxk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ztxdxeb0h"/><path clip-rule="evenodd" class="d9841qbxk"/></g>`,
		"fallback": "streamline-color:controller-1-flat",
	});
}

export default Component;
