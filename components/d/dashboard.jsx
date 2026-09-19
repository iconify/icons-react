import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yz2szqn_r.css';
import '../../css/p/p7fmlybcj.css';
import '../../css/o/ouodtacvm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yz2szqn_r"/><path class="p7fmlybcj"/><path clip-rule="evenodd" class="ouodtacvm"/></g>`,
		"fallback": "codicon:dashboard",
	});
}

export default Component;
