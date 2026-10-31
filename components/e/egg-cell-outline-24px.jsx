import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/an5k38b2g.css';
import '../../css/q/qw0bn1uiv.css';
import '../../css/c/cpg6xjbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="an5k38b2g"/><path clip-rule="evenodd" class="qw0bn1uiv"/><path clip-rule="evenodd" class="cpg6xjbsy"/></g>`,
		"fallback": "healthicons:egg-cell-outline-24px",
	});
}

export default Component;
