import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sh27erbxa.css';
import '../../css/z/zufizcyym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary sh27erbxa"/><path class="primary zufizcyym"/></g>`,
		"fallback": "iconaut:backspace-duotone",
	});
}

export default Component;
