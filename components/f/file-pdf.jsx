import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wjwt6xd6j.css';
import '../../css/o/okh9tubhv.css';
import '../../css/a/an5si8esz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wjwt6xd6j"/><path clip-rule="evenodd" class="okh9tubhv"/><path class="an5si8esz"/></g>`,
		"fallback": "reicon:file-pdf",
	});
}

export default Component;
