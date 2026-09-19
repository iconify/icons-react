import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/xr15-witw.css';
import '../../css/r/r7-p8vbgy.css';
import '../../css/s/s_178t27e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="xr15-witw"/><path class="r7-p8vbgy"/><path class="s_178t27e"/></g>`,
		"fallback": "iconoir:crib",
	});
}

export default Component;
