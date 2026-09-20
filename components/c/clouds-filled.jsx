import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d66yr1tyl.css';
import '../../css/c/ca0-m6fsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d66yr1tyl"/><path class="ca0-m6fsz"/></g>`,
		"fallback": "reicon:clouds-filled",
	});
}

export default Component;
