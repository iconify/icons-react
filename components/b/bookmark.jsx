import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qgryp0big.css';
import '../../css/e/eif875blk.css';
import '../../css/u/uuadrccgu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="qgryp0big"/><path clip-rule="evenodd" class="eif875blk"/><path class="uuadrccgu"/></g>`,
		"fallback": "icon-park:bookmark",
	});
}

export default Component;
