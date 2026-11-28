import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bnbtb2bdu.css';
import '../../css/w/wlg9pub4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bnbtb2bdu secondary"/><path class="primary wlg9pub4r"/></g>`,
		"fallback": "iconaut:feather-duotone",
	});
}

export default Component;
