import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/j6n739btm.css';
import '../../css/d/davxvp7uv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="j6n739btm"/><path class="davxvp7uv"/></g>`,
		"fallback": "icon-park-solid:folder-open",
	});
}

export default Component;
