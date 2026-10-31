import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/isyhoub8b.css';
import '../../css/l/lmp-brb6l.css';
import '../../css/b/btm0toslu.css';
import '../../css/z/zdrzfyzaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="isyhoub8b wm-shadow"/><path class="lmp-brb6l wm-shadow"/><path class="btm0toslu"/><path class="zdrzfyzaa"/></g>`,
		"fallback": "withicons-brutal:avatar-koala",
	});
}

export default Component;
