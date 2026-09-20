import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1jpry8qa.css';
import '../../css/f/fv_233bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1jpry8qa"/><path class="fv_233bmf"/></g>`,
		"fallback": "reicon:clipboard-slash-filled",
	});
}

export default Component;
