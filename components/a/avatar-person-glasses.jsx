import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/ty4s28dhl.css';
import '../../css/a/alx1jgblb.css';
import '../../css/o/o36jbbiga.css';
import '../../css/x/x0val9bto.css';
import '../../css/l/l_ysuibvd.css';
import '../../css/t/tbwufybst.css';
import '../../css/p/pad8ulm-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ty4s28dhl wm-shadow"/><path class="alx1jgblb"/><path class="o36jbbiga"/><path class="x0val9bto"/><path class="l_ysuibvd"/><path class="tbwufybst"/><path class="pad8ulm-w"/></g>`,
		"fallback": "withicons-brutal:avatar-person-glasses",
	});
}

export default Component;
