import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/seo9_bngj.css';
import '../../css/f/fkuwupbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary seo9_bngj"/><path class="fkuwupbwb primary"/></g>`,
		"fallback": "iconaut:hand-duotone",
	});
}

export default Component;
