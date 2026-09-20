import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m4xlzgbxo.css';
import '../../css/i/icese4tcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m4xlzgbxo"/><path clip-rule="evenodd" class="icese4tcp"/></g>`,
		"fallback": "reicon:flashlight-on-filled",
	});
}

export default Component;
