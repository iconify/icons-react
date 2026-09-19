import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/n/nw5ln_smg.css';
import '../../css/u/uoncq9b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><path class="nw5ln_smg"/><path class="uoncq9b4s"/></g>`,
		"fallback": "iconamoon:3d-bold",
	});
}

export default Component;
