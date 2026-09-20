import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sk87m-89y.css';
import '../../css/j/j7rnv8btf.css';
import '../../css/j/j2g9_khgu.css';
import '../../css/x/x67e1hbsb.css';
import '../../css/i/i7hvyubva.css';
import '../../css/d/dq6gj35wm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sk87m-89y"/><path class="j7rnv8btf"/><path class="j2g9_khgu"/><path class="x67e1hbsb"/><path class="i7hvyubva"/><path class="dq6gj35wm"/></g>`,
		"fallback": "streamline-color:edit-image-photo",
	});
}

export default Component;
