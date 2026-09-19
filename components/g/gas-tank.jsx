import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufie9ebgy.css';
import '../../css/l/lmzdaxwoj.css';
import '../../css/h/h98i5ybqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufie9ebgy"><path clip-rule="evenodd" class="lmzdaxwoj"/><path class="h98i5ybqa"/></g>`,
		"fallback": "iconoir:gas-tank",
	});
}

export default Component;
