import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/frqvhkbha.css';
import '../../css/h/h1r7qx2rk.css';
import '../../css/h/h48vv8brj.css';
import '../../css/w/w27peibbj.css';
import '../../css/v/vtv5mlorn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="frqvhkbha"/><path class="h1r7qx2rk wm-shine"/><path class="h48vv8brj wm-k"/><path class="w27peibbj wm-a"/><path class="vtv5mlorn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:black-cat",
	});
}

export default Component;
