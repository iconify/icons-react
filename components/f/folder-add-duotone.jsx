import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tjtx9bbci.css';
import '../../css/c/c_8_3qcty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tjtx9bbci"/><path class="c_8_3qcty"/></g>`,
		"fallback": "reicon:folder-add-duotone",
	});
}

export default Component;
