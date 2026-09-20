import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzh9c45_d.css';
import '../../css/g/gbelpuohj.css';
import '../../css/c/c_5eyibxs.css';
import '../../css/y/y34ty_lnc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bzh9c45_d"/><path class="gbelpuohj"/><path class="c_5eyibxs"/><path class="y34ty_lnc"/></g>`,
		"fallback": "streamline-color:hand-held-tablet-drawing",
	});
}

export default Component;
