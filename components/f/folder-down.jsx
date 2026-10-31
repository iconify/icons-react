import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i309x2b5e.css';
import '../../css/g/gc9ew1bqh.css';
import '../../css/l/l2fpngjgy.css';
import '../../css/p/p47-m3-oq.css';
import '../../css/w/wnveq1bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="i309x2b5e"/><path class="gc9ew1bqh wm-shine"/><path class="l2fpngjgy wm-k"/><path class="p47-m3-oq wm-a"/><path class="wm-deco wnveq1bjc"/></g>`,
		"fallback": "withicons-kawaii:folder-down",
	});
}

export default Component;
