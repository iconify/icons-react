import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tdwj99bhz.css';
import '../../css/y/yjs01po3h.css';
import '../../css/m/mmbd9bbvn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tdwj99bhz"/><path class="yjs01po3h"/><path clip-rule="evenodd" class="mmbd9bbvn"/></g>`,
		"fallback": "healthicons:baby-female-0306m",
	});
}

export default Component;
