import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi284xblo.css';
import '../../css/r/rl9nm6b5b.css';
import '../../css/j/j3g_okd9a.css';
import '../../css/s/s7hiajbok.css';
import '../../css/r/rryepq1cz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi284xblo"/><path class="rl9nm6b5b"/><path class="j3g_okd9a"/><path class="s7hiajbok"/><path class="rryepq1cz"/>`,
		"fallback": "fxemoji:frog",
	});
}

export default Component;
