import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cvjb04bdk.css';
import '../../css/r/racqqqalx.css';
import '../../css/z/zchyb6dam.css';
import '../../css/s/si82qb4av.css';
import '../../css/z/zm_z7ccau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="cvjb04bdk wm-deco"/><path class="racqqqalx wm-deco"/><path class="wm-deco zchyb6dam"/><path class="si82qb4av wm-k"/><path class="wm-a zm_z7ccau"/></g>`,
		"fallback": "withicons:component-blueprint",
	});
}

export default Component;
