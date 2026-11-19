import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3cd31v4m.css';
import '../../css/w/ww4rirb3n.css';
import '../../css/c/cuoe4bb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j3cd31v4m"/><path class="ww4rirb3n"/><path class="cuoe4bb8m"/></g>`,
		"fallback": "andrsrxn:agent-scan",
	});
}

export default Component;
