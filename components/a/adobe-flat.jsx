import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_twv2blk.css';
import '../../css/a/aw-mo3xpt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z_twv2blk"/><path class="aw-mo3xpt"/></g>`,
		"fallback": "streamline-color:adobe-flat",
	});
}

export default Component;
