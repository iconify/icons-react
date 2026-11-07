import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/d35ki5_lu.css';
import '../../css/r/rig3w4iiz.css';
import '../../css/u/u9ycn4s8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="d35ki5_lu"/><path class="rig3w4iiz"/></g><path class="u9ycn4s8d"/>`,
		"fallback": "solar:eraser-bold-duotone",
	});
}

export default Component;
