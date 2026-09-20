import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/ymx63dbjn.css';
import '../../css/s/srq8d8b-v.css';
import '../../css/q/q4-xfspgb.css';
import '../../css/r/r12enhw1b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ymx63dbjn"/><path class="srq8d8b-v"/><path class="q4-xfspgb"/><path class="r12enhw1b"/></g>`,
		"fallback": "streamline-plump-color:airport-security",
	});
}

export default Component;
