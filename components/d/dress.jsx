import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9409uhnn.css';
import '../../css/j/js1fb1lgb.css';
import '../../css/n/n1cw_vbup.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g9409uhnn"/><path clip-rule="evenodd" class="js1fb1lgb"/><path class="n1cw_vbup"/></g>`,
		"fallback": "pepicons:dress",
	});
}

export default Component;
