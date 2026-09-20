import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phu1k1bve.css';
import '../../css/z/z5_p_eb1w.css';
import '../../css/y/y3qengbsr.css';
import '../../css/i/i25xlw0mu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phu1k1bve"/><g class="z5_p_eb1w"><path class="y3qengbsr"/><path class="i25xlw0mu"/></g>`,
		"fallback": "material-icon-theme:folder-godot",
	});
}

export default Component;
