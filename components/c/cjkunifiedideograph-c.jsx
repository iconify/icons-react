import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqj83jaxk.css';
import '../../css/p/pi1-wer9v.css';
import '../../css/o/oom0uccvn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqj83jaxk"/><path class="pi1-wer9v"/><path class="oom0uccvn"/>`,
		"fallback": "fxemoji:cjkunifiedideograph-c",
	});
}

export default Component;
