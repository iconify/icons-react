import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwiql9bbm.css';
import '../../css/h/ho-ed7bnk.css';
import '../../css/x/xxjm77_er.css';
import '../../css/m/m5ja6kbtf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwiql9bbm"/><path class="ho-ed7bnk"/><path class="xxjm77_er"/><path class="m5ja6kbtf"/>`,
		"fallback": "selfhst:holyarrs",
	});
}

export default Component;
