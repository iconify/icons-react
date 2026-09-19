import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc0c_gq-d.css';
import '../../css/s/sx0qtzbwt.css';
import '../../css/l/l5a55bckk.css';
import '../../css/n/nspmw7h7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc0c_gq-d"/><path class="sx0qtzbwt"/><path class="l5a55bckk"/><path class="nspmw7h7l"/>`,
		"fallback": "fxemoji:hampster",
	});
}

export default Component;
