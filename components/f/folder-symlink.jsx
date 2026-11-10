import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6bigpbij.css';
import '../../css/b/bzyhy6h1p.css';
import '../../css/j/jsl-hczry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z6bigpbij"/><path class="bzyhy6h1p"/><path class="jsl-hczry"/></g>`,
		"fallback": "andrsrxn:folder-symlink",
	});
}

export default Component;
