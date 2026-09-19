import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouvy_-bcl.css';
import '../../css/q/q9v_1jgdn.css';
import '../../css/v/v0kkn0w6m.css';
import '../../css/q/q_9_bxbkv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ouvy_-bcl"/><path class="q9v_1jgdn"/><path class="v0kkn0w6m"/><path class="q_9_bxbkv"/></g>`,
		"fallback": "fluent-emoji-flat:bellhop-bell",
	});
}

export default Component;
