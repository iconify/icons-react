import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgang7m8j.css';
import '../../css/a/ayf976bbf.css';
import '../../css/k/k2hrn-b1v.css';
import '../../css/h/hpjm41bbr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mgang7m8j"/><path clip-rule="evenodd" class="ayf976bbf"/><path class="k2hrn-b1v"/><path clip-rule="evenodd" class="hpjm41bbr"/></g>`,
		"fallback": "glyphs:chevron-circle-outline",
	});
}

export default Component;
