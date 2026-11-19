import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adt57p04v.css';
import '../../css/i/in9408bpy.css';
import '../../css/s/s95rnkb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="adt57p04v"/><path class="in9408bpy"/><path class="s95rnkb2x"/></g>`,
		"fallback": "andrsrxn:article-edit",
	});
}

export default Component;
