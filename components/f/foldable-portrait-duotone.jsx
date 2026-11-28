import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t8v17dbos.css';
import '../../css/q/qw_pcobwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t8v17dbos"/><path class="primary qw_pcobwr"/></g>`,
		"fallback": "iconaut:foldable-portrait-duotone",
	});
}

export default Component;
