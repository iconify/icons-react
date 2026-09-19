import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxpwcdeiu.css';
import '../../css/v/vsxun6bmm.css';
import '../../css/y/yenz8u62p.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mxpwcdeiu"/><path class="vsxun6bmm"/><path class="yenz8u62p"/></g>`,
		"fallback": "cif:hn",
	});
}

export default Component;
