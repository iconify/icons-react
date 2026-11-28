import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g825mr9gl.css';
import '../../css/n/nmtpehbcc.css';
import '../../css/x/xth5tgb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g825mr9gl"/><path class="nmtpehbcc"/><path class="xth5tgb7d"/></g>`,
		"fallback": "iconaut:clipboard-paste-solid",
	});
}

export default Component;
