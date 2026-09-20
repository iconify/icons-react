import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/asozeacvw.css';
import '../../css/x/xela0utln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="asozeacvw"/><path class="xela0utln"/></g>`,
		"fallback": "reicon:heart-lock-duotone",
	});
}

export default Component;
