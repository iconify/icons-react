import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/edrj-fmof.css';
import '../../css/g/gj0rdm-gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="edrj-fmof"/><path class="gj0rdm-gm"/></g>`,
		"fallback": "reicon:check3-filled",
	});
}

export default Component;
