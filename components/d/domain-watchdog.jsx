import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/albryfbqk.css';
import '../../css/g/g0ke4nyhw.css';
import '../../css/r/rp0c_5bbk.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="albryfbqk"/><path class="g0ke4nyhw"/><path class="rp0c_5bbk"/>`,
		"fallback": "selfhst:domain-watchdog",
	});
}

export default Component;
