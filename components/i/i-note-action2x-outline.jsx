import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ffba1lbor.css';
import '../../css/a/aso4_8b4r.css';
import '../../css/b/bg3v29b8u.css';
import '../../css/e/ednc2ibcx.css';
import '../../css/j/jdgb0hbra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ffba1lbor"/><path class="aso4_8b4r"/><path class="bg3v29b8u"/><path class="ednc2ibcx"/><path clip-rule="evenodd" class="jdgb0hbra"/></g>`,
		"fallback": "healthicons:i-note-action2x-outline",
	});
}

export default Component;
