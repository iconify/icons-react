import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qp4dqccmy.css';
import '../../css/i/isvwjvlci.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qp4dqccmy"/><path class="isvwjvlci"/></g>`,
		"fallback": "heroicons-solid:envelope",
	});
}

export default Component;
