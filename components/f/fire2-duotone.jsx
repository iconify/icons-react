import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gmj_ibcbj.css';
import '../../css/m/mla2rac0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gmj_ibcbj"/><path class="mla2rac0p"/></g>`,
		"fallback": "reicon:fire2-duotone",
	});
}

export default Component;
