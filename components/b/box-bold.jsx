import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ew9ilucbs.css';
import '../../css/z/zbfih3vdc.css';
import '../../css/e/eidr5hmca.css';
import '../../css/q/qkjxsgbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ew9ilucbs"/><path class="zbfih3vdc"/><path class="eidr5hmca"/><path class="qkjxsgbny"/></g>`,
		"fallback": "solar:box-bold",
	});
}

export default Component;
