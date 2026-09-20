import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/id1axj4gj.css';
import '../../css/x/xngdxspbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="id1axj4gj"/><path clip-rule="evenodd" class="xngdxspbl"/></g>`,
		"fallback": "reicon:alarm-plus",
	});
}

export default Component;
