import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l1bc0mbkh.css';
import '../../css/d/dvqgg3bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l1bc0mbkh wm-k"/><path class="dvqgg3bxu wm-k"/></g>`,
		"fallback": "withicons:command-sketch",
	});
}

export default Component;
