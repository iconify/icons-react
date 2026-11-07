import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azvjztbxn.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/l0cxmccps.css';
import '../../css/v/vpf4mac0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="azvjztbxn"/><g class="xtpeb-edw"><path class="l0cxmccps"/><path class="vpf4mac0n"/></g>`,
		"fallback": "solar:backpack-bold-duotone",
	});
}

export default Component;
