import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-mfb10x.css';
import '../../css/d/d5ojkxbdk.css';
import '../../css/b/bot1wzbxy.css';
import '../../css/h/hj9jr80pc.css';
import '../../css/l/lknnxwbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa-mfb10x"/><path class="d5ojkxbdk"/><path class="bot1wzbxy"/><path class="hj9jr80pc"/><path class="lknnxwbda"/>`,
		"fallback": "bx:bxs-invader",
	});
}

export default Component;
