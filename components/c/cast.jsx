import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yat5egb_l.css';
import '../../css/z/zihikobha.css';
import '../../css/a/a3pcmmbzg.css';
import '../../css/d/dgbjpe3qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yat5egb_l"/><path class="zihikobha"/><path class="a3pcmmbzg"/><path class="dgbjpe3qo"/></g>`,
		"fallback": "iconaut:cast",
	});
}

export default Component;
