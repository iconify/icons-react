import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyq3pqxle.css';
import '../../css/t/t0uz3sufp.css';
import '../../css/w/w_nhvcc2y.css';
import '../../css/x/xarilxf9i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pyq3pqxle"/><path class="t0uz3sufp"/><path class="w_nhvcc2y"/><path class="xarilxf9i"/></g>`,
		"fallback": "streamline-flex-color:drone",
	});
}

export default Component;
