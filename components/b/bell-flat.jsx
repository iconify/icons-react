import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1xe_acad.css';
import '../../css/g/gm1ed0qkz.css';
import '../../css/m/mo8wsxbza.css';
import '../../css/d/d8f3w-b4e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u1xe_acad"/><path class="gm1ed0qkz"/><path clip-rule="evenodd" class="mo8wsxbza"/><path class="d8f3w-b4e"/></g>`,
		"fallback": "streamline-plump-color:bell-flat",
	});
}

export default Component;
