import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zur_4acnt.css';
import '../../css/d/d_kaplkgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zur_4acnt"/><path class="d_kaplkgk primary"/></g>`,
		"fallback": "iconaut:flower-duotone",
	});
}

export default Component;
