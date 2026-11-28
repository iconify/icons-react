import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chyc9_pya.css';
import '../../css/y/yoms5eb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="chyc9_pya secondary"/><path class="primary yoms5eb2r"/></g>`,
		"fallback": "iconaut:hard-drive-duotone",
	});
}

export default Component;
