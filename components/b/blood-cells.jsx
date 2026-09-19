import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlezl__jn.css';
import '../../css/w/w8sk9jb0e.css';
import '../../css/u/uo3128blt.css';
import '../../css/m/mcus1xbqk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qlezl__jn"/><path clip-rule="evenodd" class="w8sk9jb0e"/><path class="uo3128blt"/><path clip-rule="evenodd" class="mcus1xbqk"/></g>`,
		"fallback": "healthicons:blood-cells",
	});
}

export default Component;
