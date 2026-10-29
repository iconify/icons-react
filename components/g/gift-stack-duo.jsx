import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jhwttkscv.css';
import '../../css/v/vrdnwmbuc.css';
import '../../css/w/wpmjzybyt.css';
import '../../css/n/natiuwblb.css';
import '../../css/s/sjtkfs3hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jhwttkscv"/><path class="vrdnwmbuc wm-a"/><path class="wm-a wpmjzybyt"/><path class="natiuwblb"/><path class="sjtkfs3hl wm-a"/></g>`,
		"fallback": "withicons:gift-stack-duo",
	});
}

export default Component;
