import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ooarlb5qr.css';
import '../../css/x/xowi8cc5r.css';
import '../../css/w/wffo46blx.css';
import '../../css/x/xqy-0rbii.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ooarlb5qr"/><path class="xowi8cc5r"/><path class="wffo46blx"/><path class="xqy-0rbii"/></g>`,
		"fallback": "streamline-color:adobe",
	});
}

export default Component;
