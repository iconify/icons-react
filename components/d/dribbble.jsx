import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukyj2jbzb.css';
import '../../css/h/h7c8ghsdn.css';
import '../../css/s/s3o27sbae.css';
import '../../css/q/qwbtdcb_b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ukyj2jbzb"/><path clip-rule="evenodd" class="h7c8ghsdn"/><path clip-rule="evenodd" class="s3o27sbae"/><path clip-rule="evenodd" class="qwbtdcb_b"/></g>`,
		"fallback": "thesvg-color:dribbble",
	});
}

export default Component;
