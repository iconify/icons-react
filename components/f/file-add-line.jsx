import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/noc--kvzz.css';
import '../../css/j/jlf_cnbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="noc--kvzz"/><path class="jlf_cnbze"/></g>`,
		"fallback": "majesticons:file-add-line",
	});
}

export default Component;
