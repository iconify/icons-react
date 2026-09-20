import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdsagcb-l.css';
import '../../css/x/xvqlmwgpz.css';
import '../../css/z/zmwvwabol.css';
import '../../css/l/luruawbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pdsagcb-l"/><path clip-rule="evenodd" class="xvqlmwgpz"/><path clip-rule="evenodd" class="zmwvwabol"/><path class="luruawbpt"/></g>`,
		"fallback": "reicon:address-book",
	});
}

export default Component;
