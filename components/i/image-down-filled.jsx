import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mygmm9bri.css';
import '../../css/m/meybmcbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mygmm9bri"/><path class="meybmcbex"/></g>`,
		"fallback": "reicon:image-down-filled",
	});
}

export default Component;
