import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0v08kmee.css';
import '../../css/f/fagzixtrx.css';
import '../../css/b/bwojtebtt.css';
import '../../css/o/o51s90b0v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a0v08kmee"/><path class="fagzixtrx"/><path clip-rule="evenodd" class="bwojtebtt"/><path class="o51s90b0v"/></g>`,
		"fallback": "streamline-color:edit-image-photo-flat",
	});
}

export default Component;
