import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mep25ehts.css';
import '../../css/s/s-xxlii2p.css';
import '../../css/s/s__9l0bok.css';
import '../../css/l/l01btobsp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mep25ehts"/><path class="s-xxlii2p"/><path class="s__9l0bok"/><path class="l01btobsp"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-sao-tome-and-principe",
	});
}

export default Component;
