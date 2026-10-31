import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i309x2b5e.css';
import '../../css/l/l39lfuh0p.css';
import '../../css/g/gc9ew1bqh.css';
import '../../css/l/l2fpngjgy.css';
import '../../css/c/ccg9pxipy.css';
import '../../css/g/gd-2yzb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="i309x2b5e"/><path class="l39lfuh0p"/><path class="gc9ew1bqh wm-shine"/><path class="l2fpngjgy"/><path class="ccg9pxipy"/><path class="gd-2yzb1w"/></g>`,
		"fallback": "withicons-kawaii:folder",
	});
}

export default Component;
