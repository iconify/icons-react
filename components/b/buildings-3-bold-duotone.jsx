import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3ixgbbtk.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/wj0sbvbpy.css';
import '../../css/x/xn05bwh0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r3ixgbbtk"/><g class="xtpeb-edw"><path class="wj0sbvbpy"/><path class="xn05bwh0o"/></g>`,
		"fallback": "solar:buildings-3-bold-duotone",
	});
}

export default Component;
