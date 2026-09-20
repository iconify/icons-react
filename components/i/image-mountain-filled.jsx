import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxrrmr29d.css';
import '../../css/x/xqrpfnuvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="oxrrmr29d"/><path class="xqrpfnuvl"/></g>`,
		"fallback": "reicon:image-mountain-filled",
	});
}

export default Component;
