import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fb8pjbpfu.css';
import '../../css/j/j_oc9db6c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="fb8pjbpfu"/><path class="j_oc9db6c"/></g>`,
		"fallback": "marketeq:backpack",
	});
}

export default Component;
