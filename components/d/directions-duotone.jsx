import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c1g4szbzf.css';
import '../../css/s/sjeofj-8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c1g4szbzf secondary"/><path class="primary sjeofj-8t"/></g>`,
		"fallback": "iconaut:directions-duotone",
	});
}

export default Component;
