import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tqjbjmj2t.css';
import '../../css/h/hgqc12e4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tqjbjmj2t"/><path class="hgqc12e4d"/></g>`,
		"fallback": "reicon:exit-pip-duotone",
	});
}

export default Component;
