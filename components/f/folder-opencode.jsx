import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7l54zb3f.css';
import '../../css/y/yb1s09s6e.css';
import '../../css/a/atc24d7cn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7l54zb3f"/><g transform="translate(-9.24 -.5)"><path class="yb1s09s6e"/><rect class="atc24d7cn"/></g>`,
		"fallback": "material-icon-theme:folder-opencode",
	});
}

export default Component;
