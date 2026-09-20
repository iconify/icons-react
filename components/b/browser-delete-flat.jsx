import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnc45bc9d.css';
import '../../css/u/ur0uie67w.css';
import '../../css/i/iklj_vbew.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vnc45bc9d"/><path class="ur0uie67w"/><path clip-rule="evenodd" class="iklj_vbew"/></g>`,
		"fallback": "streamline-color:browser-delete-flat",
	});
}

export default Component;
