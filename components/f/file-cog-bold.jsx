import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fol091bdj.css';
import '../../css/t/t14sqbkgb.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fol091bdj"/><path clip-rule="evenodd" class="t14sqbkgb"/><path class="c73t34bfn"/></g>`,
		"fallback": "solar:file-cog-bold",
	});
}

export default Component;
