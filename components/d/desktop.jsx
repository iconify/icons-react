import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2j9jg9sd.css';
import '../../css/w/wgjzf2bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a2j9jg9sd"/><path clip-rule="evenodd" class="wgjzf2bwt"/></g>`,
		"fallback": "gg:desktop",
	});
}

export default Component;
