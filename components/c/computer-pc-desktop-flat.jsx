import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2s6_nyjj.css';
import '../../css/j/jlhqu0r3z.css';
import '../../css/o/o3pxcybih.css';
import '../../css/a/ar_o8813a.css';
import '../../css/b/bsi7km30e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x2s6_nyjj"/><path clip-rule="evenodd" class="jlhqu0r3z"/><path class="o3pxcybih"/><path clip-rule="evenodd" class="ar_o8813a"/><path clip-rule="evenodd" class="bsi7km30e"/></g>`,
		"fallback": "streamline-color:computer-pc-desktop-flat",
	});
}

export default Component;
