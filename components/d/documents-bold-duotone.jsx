import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d29v6d4xo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/j0tyonbdw.css';
import '../../css/k/k0d7q8bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d29v6d4xo"/><g class="xtpeb-edw"><path class="j0tyonbdw"/><path class="k0d7q8bwx"/></g>`,
		"fallback": "solar:documents-bold-duotone",
	});
}

export default Component;
