import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ebkksgjqf.css';
import '../../css/a/asozeacvw.css';
import '../../css/m/mx2jxjw2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ebkksgjqf"/><path clip-rule="evenodd" class="asozeacvw"/><path class="mx2jxjw2b"/></g>`,
		"fallback": "reicon:heart-unlock-duotone",
	});
}

export default Component;
