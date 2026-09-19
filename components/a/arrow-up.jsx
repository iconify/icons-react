import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v0g_z_j1d.css';
import '../../css/y/yynt2ibtm.css';
import '../../css/b/bhrwz6oki.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v0g_z_j1d"/><path class="yynt2ibtm"/><path class="bhrwz6oki"/></g>`,
		"fallback": "pepicons:arrow-up",
	});
}

export default Component;
