import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xej-7lbhg.css';
import '../../css/c/c2j0naclm.css';
import '../../css/k/kxq-picmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xej-7lbhg"/><path class="c2j0naclm"/><path clip-rule="evenodd" class="kxq-picmp"/></g>`,
		"fallback": "reicon:folder-files-duotone",
	});
}

export default Component;
