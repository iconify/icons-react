import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zgk2f4e6m.css';
import '../../css/a/ad8mu8bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zgk2f4e6m"/><path clip-rule="evenodd" class="ad8mu8bes"/></g>`,
		"fallback": "reicon:home-add",
	});
}

export default Component;
